var Banner = React.createClass({
    // loadCommentsFromServer 是自定义方法，通过this.loadCommentsFromServer 可以调用
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
                this.afterAjaxPerform();
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    // afterAjaxPerform 是自定义方法，通过this.afterAjaxPerform 可以调用，运用在ajax的回调函数中
    afterAjaxPerform: function() {
        // 测试，文档载入之后执行的jQuery代码
        $('.banner').each(function(){
            var e=$(this);
            var pointer=e.attr("data-pointer");
            var interval=e.attr("data-interval");
            var style=e.attr("data-style");
            var items=e.attr("data-item");
            var items_s=e.attr("data-small");
            var items_m=e.attr("data-middle");
            var items_b=e.attr("data-big");
            var num=e.find(".carousel .item").length;
            var win=$(window).width();
            var i=1;

            if(interval==null){interval=5};
            if(items==null || items<1){items=1};
            if(items_s!=null && win>760){items=items_s};
            if(items_m!=null && win>1000){items=items_m};
            if(items_b!=null && win>1200){items=items_b};

            var itemWidth=Math.ceil(e.outerWidth()/items);
            var page=Math.ceil(num/items);
            e.find(".carousel .item").css("width",itemWidth+ "px");
            e.find(".carousel").css("width",itemWidth*num + "px");

            var carousel=function(){
                i++;
                if(i>page){i=1;}
                $showbanner(e,i,items,num);
            };
            var play=setInterval(carousel,interval*600);

            e.mouseover(function(){clearInterval(play);});
            e.mouseout(function(){play=setInterval(carousel,interval*600);});

            if(pointer!=0 && page>1){
                var point='<ul class="pointer"><li value="1" class="active"></li>';
                for (var j=1;j<page;j++){
                    /* SignOulve 轮播图修复压缩后空格消失的BUG 2015.3.15 */
                    point=point+' '+'<li value="'+(j+1)+'"></li>';
                };
                point=point+'</ul>';
                var pager=$(point);
                if(style!=null){pager.addClass(style);};
                e.append(pager);

                /* SignOulve 轮播图修改 2015.3.4 */
                /*pager.css("left",e.outerWidth()*0.5 - pager.outerWidth()*0.5+"px");*/
                pager.css("left","50%");
                pager.css("margin-left",-pager.outerWidth()*0.5);

                pager.find("li").click(function(){
                    $showbanner(e,$(this).val(),items,num);
                });
                var lefter=$('<div class="pager-prev icon-angle-left"></div>');
                var righter=$('<div class="pager-next icon-angle-right"></div>');
                if(style!=null){lefter.addClass(style);righter.addClass(style);};
                e.append(lefter);
                e.append(righter);

                lefter.click(function(){
                    i--;
                    if(i<1){i=page;}
                    $showbanner(e,i,items,num);
                });
                righter.click(function(){
                    i++;
                    if(i>page){i=1;}
                    $showbanner(e,i,items,num);
                });
            };
        });

        $showbanner=function(e,i,items,num){
            /* SignOulve 轮播图修改 2015.3.29 添加通屏模式下的Banner背景颜色兼容*/
            if($(".layout-banner") != ''){
                var itemColor = e.find(".item-"+i).css("background-color");
                $(".layout-banner").css("background-color", itemColor);
            }
            /* 使用方法：添加 .layout-banner .item-i；添加 style="background-color: #000000;" */

            var after=0,leftx=0;
            leftx = - Math.ceil(e.outerWidth()/items)*(items)*(i-1);
            if(i*items > num){after=i*items-num;leftx= - Math.ceil(e.outerWidth()/items)*(num-items);};
            e.find(".carousel").stop(true, true).animate({"left":leftx+"px"},800);
            e.find(".pointer li").removeClass("active");
            e.find(".pointer li").eq(i-1).addClass("active");
        };
    },

    // getInitialState()在组件的生命周期中仅执行一次，设置组件的初始化状态。
    getInitialState: function() {
        // 这里需要初始化所有组件内需要提供的参数（对象形式），如果不需要参数则返回null
        // 这里返回data是因为CommentBox自身的render里，render中有使用到{this.state.data} 
        return {data: []};
    },

    // componentDidMount()是一个在组件被渲染的时候React自动调用的方法
    componentDidMount: function() {
        this.loadCommentsFromServer();
    },

    render: function() {
        var data = this.state.data;
        var imgGroup = data.map(function (img) {
            if(img != null){
                return(
                    <div className="item">
                        <img className="img-responsive hidden-l hidden-s hidden-m" src={img['1180'].src} alt={img['1180'].alt} />
                        <img className="img-responsive hidden-l hidden-s hidden-b" src={img['980'].src} alt={img['980'].alt} />
                        <img className="img-responsive hidden-l hidden-m hidden-b" src={img['740'].src} alt={img['740'].alt} />
                        <img className="img-responsive hidden-s hidden-m hidden-b" src={img['400'].src} alt={img['400'].alt} />
                    </div>
                );
            }
        });

        return(
            <div className="margin-large-top margin-large-bottom">
                <div className="banner radius">
                    <div className="carousel">
                        {imgGroup}
                    </div>
                </div>
            </div>
        );
    }
});