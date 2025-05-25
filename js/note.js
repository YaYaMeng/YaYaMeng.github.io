// document.getElementById('popupTrigger').addEventListener('click', function() {
//   document.getElementById('popup').style.display = 'block';
// });

// document.querySelector('.popup-close').addEventListener('click', function() {
//   document.getElementById('popup').style.display = 'none';
// });

 function triggerAnimation() {
      const box = document.getElementById("animatedBox");
      var popup = document.getElementById('popup');

            // 移除之前的动画类，确保动画可以重复触发
      box.classList.remove("expand", "collapse");
      
      // 强制浏览器重绘，使动画重置生效
      void box.offsetWidth;

      if(popup.style.display == "none" || popup.style.display == ""){
      
        // 重新添加动画类
        box.classList.add("expand");

        popup.style.display = "block";
      }
      else{
        popup.style.display = "none";
        // 重新添加动画类
        box.classList.add("collapse");

      }
    }