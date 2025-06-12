
function triggerAnimation() {
  const box = document.getElementById("animatedBox");
  var popup = document.getElementById('popup');
  //下拉图片
  var msg = document.getElementById('popupTrigger');
  //边框
  var border = document.getElementById('work_1');

  // 移除之前的动画类，确保动画可以重复触发
  //box.classList.remove("expand", "collapse");

  // 强制浏览器重绘，使动画重置生效
  void box.offsetWidth;

  if (popup.style.display == "none" || popup.style.display == "") {

    // 重新添加动画类
    //box.classList.add("expand");
    popup.style.display = "block";
    // 重置高度并应用过渡
    box.style.height = '50';
    popup.style.height = 'auto';
    const contentHeight = 50 + popup.scrollHeight + 32;
    setTimeout(() => {
      box.style.height = `${contentHeight}px`;
    }, 10);



    msg.style.backgroundImage = "url('./img/叉号.png')";

    border.style.borderBottom = "1px dashed #BFBFBF";
    border.style.borderRadius = "5px";
  }
  else {
    popup.style.display = "none";
    // 重新添加动画类
    //box.classList.add("collapse");

    // 重置高度并应用过渡
    const contentHeight1 = '50';
    setTimeout(() => {
      box.style.height = `${contentHeight1}px`;
    }, 10);

    msg.style.backgroundImage = "url('./img/下拉.png')";

  }
}


document.getElementById('work_1').addEventListener('click', function () {
  this.classList.toggle('active');
  triggerAnimation();
});


function triggerAnimation_2() {
  const box = document.getElementById("animatedBox_1");

  var popup = document.getElementById('popup_1');
  //下拉图片
  var msg = document.getElementById('popupTrigger_1');
  //边框
  var border = document.getElementById('work_2');

  // 移除之前的动画类，确保动画可以重复触发
  //box.classList.remove("expand_1", "collapse_1");

  // 强制浏览器重绘，使动画重置生效
  void box.offsetWidth;

  if (popup.style.display == "none" || popup.style.display == "") {

    // 重新添加动画类
    //box.classList.add("expand_1");

    popup.style.display = "block";


    box.style.height = '50';
    popup.style.height = 'auto';
    const contentHeight2 = 50 + popup.scrollHeight + 32;
    setTimeout(() => {
      box.style.height = `${contentHeight2}px`;
    }, 10);




    msg.style.backgroundImage = "url('./img/叉号.png')";

    border.style.borderBottom = "1px dashed #BFBFBF";
    border.style.borderRadius = "5px";
  }
  else {
    popup.style.display = "none";
    // 重新添加动画类
    //box.classList.add("collapse_1");

    // 重置高度并应用过渡
    const contentHeight3 = '50';
    setTimeout(() => {
      box.style.height = `${contentHeight3}px`;
    }, 10);

    msg.style.backgroundImage = "url('./img/下拉.png')";

  }
}


document.getElementById('work_2').addEventListener('click', function () {
  this.classList.toggle('active');
  triggerAnimation_2();
});


const slider = document.getElementById('slider');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

let currentSlide = 0;
const totalSlides = 2;

// 向左滑动
leftBtn.addEventListener('click', () => {
  if (currentSlide === 0) {
    // 如果当前是第一项，切换到第二项
    currentSlide = 1;
  } else {
    // 如果当前是第二项，切换回第一项
    currentSlide = 0;
  }
  updateSlider();
});

// 向右滑动
rightBtn.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = 1;
  } else {
    currentSlide = 0;
  }
  updateSlider();
});

function updateSlider() {
  // 计算需要移动的距离（每个li宽度为50%）
  // const translateX = -currentSlide * 50;
  // slider.style.transform = `translateX(${translateX}%)`;
  const translateX = -currentSlide * 190;
  slider.style.transform = `translateX(${translateX}px)`;
  // 更新按钮状态
  leftBtn.classList.toggle('btn_hidden', currentSlide === 0);
  if (currentSlide === 1) {
    leftBtn.style.display = "block"
  }
  rightBtn.classList.toggle('btn_hidden', currentSlide === 1);
}


//详情按钮
document.getElementById('details').addEventListener('click', function(){
    this.classList.toggle('active');
    //获取详情界面的高度
    var frame = document.getElementById("frame");
    //获取右边界面的样式
    var right = document.getElementById("right");
    //获取按钮的样式
    var btn = document.getElementById("details");
    //高度
    var height = frame.style.height;
    if(height == 0 || height == "0px")        //展开详情
    {
      frame.style.height = "90px";
      right.style.marginTop = "370px"
      btn.style.backgroundImage = "url('./img/叉号.png')";
    }
    else                                    //关闭详情
    {
      frame.style.height = 0;
      right.style.marginTop = "270px"
      btn.style.backgroundImage = "url('./img/详情.png')";
    }
});