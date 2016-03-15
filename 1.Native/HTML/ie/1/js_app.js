    /*
    * 如果需要采用原生JS，则不考虑兼容低端IE
    * 如果需要兼容低端IE，则不考虑采用原生JS
    */

    document.addEventListener("readystatechange", function(e) {
      if(document.readyState == "complete") { // console.log('readystatechange complete 页面资源全部加载完成');
        var bannerAll = document.querySelectorAll(".banner"); // console.log(bannerAll);

        for(var i = 0; i < bannerAll.length; i++) { // console.log(i);
          var bannerOne = bannerAll[i]; // console.log(bannerOne);

          if(i === 1){
            bannerOne.remove();
          }else{
            var interval    = bannerOne.getAttribute("data-interval"); // console.log(interval);
            var pointer     = bannerOne.getAttribute("data-pointer");
            var style       = bannerOne.getAttribute("data-style"); // console.log(style);
            var items       = bannerOne.getAttribute("data-item");
            var itemsSmall  = bannerOne.getAttribute("data-small");
            var itemsMiddle = bannerOne.getAttribute("data-middle");
            var itemsBig    = bannerOne.getAttribute("data-big");

            var num = bannerOne.querySelectorAll(".carousel .item").length; // console.log(num);
            var windowWidth = window.innerWidth; // console.log(windowWidth);

            var sign = 1;

            if(interval == null) interval = 5; // console.log(interval);
            if(items == null || items < 1) items = 1;
            if(itemsSmall != null && windowWidth > 760) items = itemsSmall;
            if(itemsMiddle != null && windowWidth > 1000) items = itemsMiddle;
            if(itemsBig != null && windowWidth > 1200) items = itemsBig;
            // console.log(items);

            var itemWidth = Math.ceil(bannerOne.clientWidth / items); // console.log(itemWidth);
            var page = Math.ceil(num / items); // console.log(page);

            var fooItems = bannerOne.querySelectorAll(".carousel .item"); // console.log(fooItems);
            for(var j = 0; j < fooItems.length; j++){ // console.log(fooItems[j]);
              fooItems[j].style.setProperty("width", itemWidth + "px");
            }

            bannerOne.querySelector(".carousel").style.setProperty("width", itemWidth*num + "px");

            var bannerOneWidth = bannerOne.clientWidth;
            var carousel = function(){
              sign++;
              if(sign > page) sign = 1;

              showBanner(bannerOne, bannerOneWidth, sign, items, num);
              // console.log(bannerOne.clientWidth);
            }

            var play = setInterval(carousel, interval * 600);

            bannerOne.addEventListener('mouseover', function(e) {
              clearInterval(play);
              // console.log('mouseover');
            }, false);

            bannerOne.addEventListener('mouseout', function(e) {
              play = setInterval(carousel, interval * 600);
              // console.log('mouseout');
            }, false);
          }
        }
      }
    }, false);

    function showBanner(element, width, sign, items, num){
      // console.log(element);
      var after = 0, left = 0;
      left = - Math.ceil(width / items) * (items) * (sign-1);

      if(sign * items > num){
        after = sign * items - num;
        left = - Math.ceil(width / items) * (num-items);
      }
      // console.log(after);
      // console.log(left);

      element.querySelector(".carousel").style.setProperty("left", left + "px");

      var fooLis = element.querySelectorAll(".pointer li");
      for(var i = 0; i < fooLis.length; i++){
        fooLis[i].removeAttribute("class");
        if(i == (sign-1)){
          fooLis[i].setAttribute("class", "active");
        }
      }
    }
