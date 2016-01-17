$(function(){
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
        /*var lefter=$('<div class="pager-prev icon-angle-left"></div>');
        var righter=$('<div class="pager-next icon-angle-right"></div>');*/
        var lefter=$('<div class="pager-prev"><i class="fa fa-angle-left"></i></div>');
        var righter=$('<div class="pager-next"><i class="fa fa-angle-right"></i></div>');
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

/* SignOulve JS 防盗用机关 2015.3.8 */
/*if(document.domain !== 'coding.oulve.com'){
    window.location.href="http://oulve.com";
}*/

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
});
