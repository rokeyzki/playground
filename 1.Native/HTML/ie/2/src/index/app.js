$(function(){
  $('.banner').each(function(){ // 遍历banner
      var e=$(this); // 获取banner的jQ对象
      var pointer=e.attr("data-pointer"); // 获取jQ对象的属性
      var interval=e.attr("data-interval");
      var style=e.attr("data-style");
      var items=e.attr("data-item");
      var items_s=e.attr("data-small");
      var items_m=e.attr("data-middle");
      var items_b=e.attr("data-big");
      var num=e.find(".carousel .item").length; // 获取轮播走马灯中总的栏目数
      var win=$(window).width(); // 获取当前窗口的宽度
      var i=1;

      if(interval==null){interval=5}; // 设置单栏目轮播时长，默认为5s
      if(items==null || items<1){items=1}; // items 当前可视范围内展示的栏目数
      if(items_s!=null && win>760){items=items_s};
      if(items_m!=null && win>1000){items=items_m};
      if(items_b!=null && win>1200){items=items_b};

      var itemWidth=Math.ceil(e.outerWidth()/items); // 获取栏目宽度：ceil方法返回大于参数值的最小整数、  outerWidth返回jQ对象本体加padding加border的可视范围宽度
      var page=Math.ceil(num/items); // 获取页数：ceil方法返回大于参数值的最小整数、num为轮播走马灯中总的栏目数、items为当前可视范围内展示的栏目数
      e.find(".carousel .item").css("width",itemWidth+ "px"); // 设置每个栏目的宽度
      e.find(".carousel").css("width",itemWidth*num + "px"); // 设置轮播走马灯的宽度

      var carousel=function(){
          i++;
          if(i>page){i=1;}
          // 设置循环
          $showbanner(e,i,items,num);
      };
      // 设置定时任务
      var play=setInterval(carousel,interval*600);

      // 事件：当鼠标进入元素区域的时候触发 -》中止事件
      e.mouseover(function(){clearInterval(play);});
      // 事件：当鼠标离开元素区域的时候触发 -》新启事件
      e.mouseout(function(){play=setInterval(carousel,interval*600);});

      if(pointer!=0 && page>1){ // pointer 是否显示点状提示
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

  /*
  * 轮播动画
  * 1：计算carousel左移距离，并进行移动
  * 2：取消当前栏目的active，激活下一个栏目的active
  */
  $showbanner=function(e,i,items,num){
      /* SignOulve 轮播图修改 2015.3.29 添加通屏模式下的Banner背景颜色兼容*/
      if($(".layout-banner") != ''){
          var itemColor = e.find(".item-"+i).css("background-color");
          $(".layout-banner").css("background-color", itemColor);
      }
      /* 使用方法：添加 .layout-banner .item-i；添加 style="background-color: #000000;" */

      var after=0,left=0;
      left = - Math.ceil(e.outerWidth()/items)*(items)*(i-1);
      if(i*items > num){
        after=i*items-num;
        left= - Math.ceil(e.outerWidth()/items)*(num-items);
      }
      e.find(".carousel").stop(true, true).animate({"left":left+"px"}, 800);
      console.log(left);
      e.find(".pointer li").removeClass("active");
      console.log(i);
      e.find(".pointer li").eq(i-1).addClass("active");
  };
});
