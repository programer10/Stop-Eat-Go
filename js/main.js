
jQuery(document).ready(function(){
    "use stricts"
    $('.slider').ripples({
    dropRadius: 18,
    perturbance: 0.01,

    });
    
    
    $(window).scroll(function(){
       var top = $(window).scrollTop();
       if(top>=290){
           $("nav").addClass('secondary');
       }
       else
           if($("nav").hasClass('secondary')){
               $("nav").removeClass('secondary');
           }
    
   });
    
    $('.our-menu').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
    enabled: true
    }
    });

  $("#team-members").owlCarousel({
      items:2,
      autoplay:true,
      smartSpeed:1000,
      loop:true,
      autoplayHoverPause:true
    
       
      
  });
    
  $('.counter').counterUp({
                delay: 10,
                time: 3000
            });
    
  $('a').smoothScroll();
    
  $('.a smooth-scroll').click(function (event) {
      
      event.preventDefault();
      
      var section = $(this).attr("href");
      
      $('html, body').animate({
          scrollTop: $(section).offset().top - -2
      },  2550, "easeInOutExpo");
  });
    
    new WOW().init();
});

 // VIDEO   
    var video = document.querySelector(".video");
    var juice = document.querySelector(".orange-juice");
    var btn = document.getElementById("play-pause");

    function runAndStopVideo() {
        if(video.paused) {
            btn.className = "pause";
            video.play();
        }else {
            btn.className = "play";
            video.pause();
        }
    }

    btn.onclick = function() {
        runAndStopVideo();
    };
    
    video.addEventListener("timeupdate", function() {
        var orangeTrackPos = video.currentTime / video.duration;
        juice.style.width = orangeTrackPos * 100 + "%";
        if(video.ended) {
           btn.className = "play";
           }
    });

// MAP
    var marker;
    function initMap(){
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom:12,
            center:{lat:51.503399,lng:-0.119519}
        });
   
      marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position:{lat: 51.508530, lng: -0.076132},
      });
        marker.addListener('click', toggleBounce);
    }

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
   


    var App = function () {
        return {
            init: function (element) {
                handleLogin();
            }
        }


    }();

// REGISTER

    function ValidateForm() {
        var username = document.getElementById("username");
        var phoneNum = document.getElementById("phoneNum");
        var password = document.getElementById("password");
        var confirm_password = document.getElementById("confirm_password");
        removeMessage();
        var valid=true;
        
        if(username.value.length==0){
            username.className="wrong-input";
            username.nextElementSibling.innerHTML="Username can't be blank!";
            valid=false;
        }
        
        if(phoneNum.value.length<10){
            phoneNum.className="wrong-input";
            phoneNum.nextElementSibling.innerHTML="Contact number cannot be less than 10!";
            valid=false;
        }
        
        if(password.value.length<6){
            password.className="wrong-input";
            password.nextElementSibling.innerHTML="Password cannot be less than 6!";
            valid=false;
        }
        
        if(password.value!=confirm_password.value){

            confirm_password.nextElementSibling.innerHTML="Password does not match!";
            valid=false;
        }
        
        return valid; 
    }

    function removeMessage() {
        var errorinput=document.querySelectorAll(".wrong-input");
        [].forEach.call(errorinput, function(el){
            el.classList.remove("wrong-input");
        });
        
        var errorparam=document.querySelectorAll(".error");
        [].forEach.call(errorparam, function(el){
            el.innerHTML="";
        });
    }






















