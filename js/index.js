

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navItem').classList.add('fixed-top');
        } else {
          document.getElementById('navItem').classList.remove('fixed-top');
          document.body.style.paddingTop = '0';
        } 
    });
  }); 


  if( document.getElementById('showInfo1')){
    document.getElementById('showInfo1').onclick=() => {
      var contentDescription=document.getElementById('contentDescription')
      if(contentDescription.classList.contains('limited'))
      {
        contentDescription.classList.remove("limited");
      document.getElementById('showInfo1').innerText='Thu Gọn'
      }
      else
      {
        contentDescription.classList.add('limited');
        document.getElementById('showInfo1').innerText='Xem Thêm'
      }
      

     }
  }

  $(document).ready(function()
{

   
        if($('.bbb_viewed_slider').length)
        {
            var viewedSlider = $('.bbb_viewed_slider');

            viewedSlider.owlCarousel(
            {
                loop:true,
                margin:30,
                autoplay:true,
                autoplayTimeout:1200,
                nav:false,
                dots:false,
                responsive:
                {
                    0:{items:2},
                    575:{items:2},
                    768:{items:3},
                    991:{items:4},
                    1199:{items:6}
                }
            });

            if($('.bbb_viewed_prev').length)
            {
                var prev = $('.bbb_viewed_prev');
                prev.on('click', function()
                {
                    viewedSlider.trigger('prev.owl.carousel');
                });
            }

            if($('.bbb_viewed_next').length)
            {
                var next = $('.bbb_viewed_next');
                next.on('click', function()
                {
                    viewedSlider.trigger('next.owl.carousel');
                });
            }
        }


    });