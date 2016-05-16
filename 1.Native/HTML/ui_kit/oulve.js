document.addEventListener("readystatechange", function(e) {
  if(document.readyState == "complete") { // console.log('readystatechange complete 页面资源全部加载完成');

    var fixedAll = document.querySelectorAll(".fixed"); // console.log(bannerAll);

    for(i in fixedAll){
      if(fixedAll.hasOwnProperty(i)){ // 遍历对象的推荐方式
        handleFixed.call(fixedAll[i]); // 为避免定时程序、事件程序中的对象被覆盖，对象需要绑定到业务函数中
      }
    };

    var spyaAll = document.querySelectorAll(".spy a"); // console.log(spyaAll);

    for(i in spyaAll){
      if(spyaAll.hasOwnProperty(i)){ // 遍历对象的推荐方式
        handleSpya.call(spyaAll[i]); // 为避免定时程序、事件程序中的对象被覆盖，对象需要绑定到业务函数中
      }
    };

  }
}, false);

var handleFixed = function(){
  var fixed = this;

  var style = fixed.getAttribute('data-style');
  var top = fixed.getAttribute('data-offset-fixed');
  if(top == null) {
    top = fixed.offsetTop;
  }else{
    top = fixed.offsetTop - parseInt(top);
  }

  if(style == null) {
    style = "fixed-top";
  }

  showFixed.call(fixed, style, top);
}

var showFixed = function(style, top){
  var fixed = this;

  window.addEventListener('scroll', function(e) {
    var thisTop = top - document.body.scrollTop;
    if(style == "fixed-top" && thisTop < 0) {
      fixed.classList.add("fixed-top");
    } else {
      fixed.classList.remove("fixed-top");
    }

    var thisBottom = top - document.body.scrollTop - document.documentElement.clientHeight;
    if(style == "fixed-bottom" && thisBottom > 0) {
      fixed.classList.add("fixed-bottom");
    } else {
      fixed.classList.remove("fixed-bottom");
    }
  }, false);

}

var handleSpya = function(){
  var spya = this;
  var spy = spya.closest('.spy');
  var target = spy.getAttribute('data-target');
  var top = spy.getAttribute('data-offset-spy');
  var thisTarget = '';
  var thisTop = '';

  if(top == null) top = 0;
  if(target == null){
    thisTarget = window;
  }else{
    thisTarget = document.querySelector(target);
  }

  console.log(thisTarget);

  thisTarget.addEventListener('scroll', function(e) {
    var href = spya.getAttribute("href");
    if(target == null){
      thisTop = document.querySelector(href).getBoundingClientRect().top - document.body.scrollTop - parseInt(top);
    }else{
      thisTop = document.querySelector(href).getBoundingClientRect().top - this.offsetTop - parseInt(top);
    }

    console.log(thisTop);

    if(thisTop < 0){
      var lis = spy.querySelectorAll('li');

      for (var j = lis.length - 1; j >= 0; j--) {
        lis[j].classList.remove('active');
      }

      spya.closest('li').classList.add('active');
    }
  }, false);
}
