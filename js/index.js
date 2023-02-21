$(document).ready(function(){
	$('.nav-list a').each(function () {
			let location = window.location.href;
			let link = this.href;
			if (location == link) {
					$(this).addClass('activeMenu');
			}
	})
	var swiper = new Swiper(".slideServises", {
		slidesPerView: 1,
		spaceBetween: 15,
		breakpoints: {
			798: {
				slidesPerView: 4,
				spaceBetween: 15
			},
		},
		loop: true,
		slidesPerGroup: 1,
		speed: 300,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			type:"bullets",
			clickable: true,
		},
		navigation: {
			prevEl: document.querySelector('.block-4 .swiper-button-prev'),
			nextEl: document.querySelector('.block-4 .swiper-button-next'),
		},
	});

	var swiper = new Swiper(".slideCertificates", {
		slidesPerView: 3,
		spaceBetween: 17,
		breakpoints: {
			798: {
				slidesPerView: 5,
				spaceBetween: 15
			},
		},
		loop: true,
		slidesPerGroup: 1,
		speed: 300,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			type:"bullets",
			clickable: true,
		},
		navigation: {
		prevEl: document.querySelector('.block-5 .swiper-button-prev'),
		nextEl: document.querySelector('.block-5 .swiper-button-next'),
		},
	});

	var swiper = new Swiper(".slidePartners", {
		slidesPerView: 3,
		spaceBetween: 15,
		breakpoints:{
			798:{
				slidesPerView: 5,
				spaceBetween: 15,
			}
		},
		loop: true,
		slidesPerGroup: 1,
		speed: 300,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			type:"bullets",
			clickable: true,
		},
		navigation: {
		prevEl: document.querySelector('.block-9 .swiper-button-prev'),
		nextEl: document.querySelector('.block-9 .swiper-button-next'),
		},
	});

	var swiper = new Swiper(".swiperDescription", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper2 = new Swiper(".swiperDescription2", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});

	(() => {
		'use strict'
	
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		const forms = document.querySelectorAll('.needs-validation')
	
		// Loop over them and prevent submission
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', event => {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}
	
				form.classList.add('was-validated')
			}, false)
		})
	})()

	$('.iconChange').on('click', function(e){
		e.preventDefault();

		$(this).toggleClass('clicked');
	});
	})

$(window).on("scroll", function() {
    if($(window).scrollTop() > 15) {
        $("header").addClass("activeFixed");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("activeFixed");
    }
});

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery


// pagination
var count = 46; //всего записей
var cnt = 24; //сколько отображаем сначала
var cnt_page = Math.ceil(count / cnt); //кол-во страниц
 
//выводим список страниц
var paginator = document.querySelector(".paginator");
var page = "";
for (var i = 0; i < cnt_page; i++) {
  page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
}
paginator.innerHTML = page;
 
//выводим первые записи {cnt}
var div_num = document.querySelectorAll(".num");
for (var i = 0; i < div_num.length; i++) {
  if (i < cnt) {
    div_num[i].style.display = "block";
  }
}
 
var main_page = document.getElementById("page1");
main_page.classList.add("paginator_active");
 
//листаем
function pagination(event) {
  var e = event || window.event;
  var target = e.target;
  var id = target.id;
   
  if (target.tagName.toLowerCase() != "span") return;
   
  var num_ = id.substr(4);
  var data_page = +target.dataset.page;
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");
 
  var j = 0;
  for (var i = 0; i < div_num.length; i++) {
    var data_num = div_num[i].dataset.num;
    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";
 
  }
  for (var i = data_page; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "block";
    j++;
  }
}

$(document).ready(function(){
	$( "#slider-range" ).slider({
		range: true,
		min: 10,
		max: 1149440,
		values: [ 10, 1149440 ],
		step: 10,
		slide: function( event, ui ) {
				$( "#price" ).val( "KGS " + ui.values[ 0 ] + " - KGS " + ui.values[ 1 ] );
		}
	});
	$( "#price" ).val( "KGS " + $( "#slider-range" ).slider( "values", 0 ) +
			" - KGS " + $( "#slider-range" ).slider( "values", 1 ) );
});
