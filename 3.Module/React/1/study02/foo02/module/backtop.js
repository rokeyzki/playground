var BackTop = React.createClass({
    // componentDidMount()是一个在组件被渲染的时候React自动调用的方法
    componentDidMount: function() {
        
        // 测试，文档载入之后执行的jQuery代码
        $(".win-backtop").click(function(){$('body,html').animate({scrollTop:0},1000);return false;});

        $(".fixed").each(function(){
            var e=$(this);
            var style=e.attr("data-style");
            var top=e.attr("data-offset-fixed");
            if(top==null){top=e.offset().top;}else{top=e.offset().top - parseInt(top);};
            if(style==null){style="fixed-top";};

            $(window).bind("scroll",function(){
                var thistop=top - $(window).scrollTop();
                if(style=="fixed-top" && thistop<0){
                    e.addClass("fixed-top");
                }else{
                    e.removeClass("fixed-top");
                };

                var thisbottom=top - $(window).scrollTop()-$(window).height();
                if(style=="fixed-bottom" && thisbottom>0){
                    e.addClass("fixed-bottom");
                }else{
                    e.removeClass("fixed-bottom");
                };
            });

        });
        
    },

    render: function() {
        return(
            <div className="layout fixed padding bg-gray bg-inverse" data-style="fixed-bottom" data-offset-fixed="0">
                <div className="container">
                    <div className="text-center">我先在底部呆着，到站了才回去。<a className="win-backtop" href="javascript:;">back top</a></div>
                </div>
            </div>
        );
    }
});