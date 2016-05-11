 $(function(){
           var i=0;//animate滑动时图片的下标，首张为0;第二张为1,以此类推
           
           var  clone=$('.banner .banner-img li').first().clone();
                
                $('.banner .banner-img').append(clone);
           var  size=$('.banner .banner-img li').size();
               //根据图片动态生成底部圆点
                for (var j = 0;j < size-1; j++) {
                   $('.banner .banner-dot').append('<li></li>')
                 }
                $('.banner .banner-dot li').first().addClass('on');
          
       //左边按钮
         $('.btn-l').click(function(){
              moveL();
         })
         //左移函数
         function moveL() {
                i++;
                if (i==size) {
                    $('.banner-img').css({left:0}); //通过css去实现跳到第一张，肉眼看不见
                    i=1; //第二张了
                 }
                $('.banner-img').stop().animate({left:-550*i},500);
                
                if (i==size-1) {
                  $('.banner .banner-dot li').eq(0).addClass('on').siblings().removeClass('on');
                }else{
                  $('.banner .banner-dot li').eq(i).addClass('on').siblings().removeClass('on');
                }
         }

       //右边按钮
          $('.btn-r').click(function(){
               moveR();
       
         })
          //右移函数
          function moveR() {
                 i--;
                if (i==-1) {
                     $('.banner-img').css({left:-(size-1)*550});
                     i=size-2;
                }
                $('.banner-img').stop().animate({left:-550*i},500);
                  $('.banner .banner-dot li').eq(i).addClass('on').siblings().removeClass('on');
               
          }
          //鼠标划入圆点切换
           $('.banner .banner-dot li').hover(function(){
              index=$(this).index();
              i=index;//实现i与index的统一
              $('.banner-img').stop().animate({left:-550*index},500);
              $(this).addClass('on').siblings().removeClass('on');
           })
          

      // // 动画开始
       var time=setInterval(moveL,2000);
       

       //当鼠标划入时停止动画
        $('.banner').hover(function(){
               clearInterval(time);
               
        },function(){
             time=setInterval(moveL,2000);

        })
        
      })