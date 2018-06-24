 layui.use('carousel', function(){
            var carousel = layui.carousel;
            //建造实例
            carousel.render({
              elem: '#test1'
              ,width: '100%'
              ,height: '100%' //设置容器宽度
              ,arrow: 'always'
              ,autoplay: 'false'
              ,anim: 'fade'
              ,interval: '4000'
              ,indicator: 'none' //始终显示箭头
              //,anim: 'updown' //切换动画方式
            });
          });