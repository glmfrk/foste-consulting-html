$(document).ready(function () {
	// flyout menu script

	$(".menu-bar").on("click", function () {
		console.log("menu clicked ...");
		$(".primary-menu").addClass("menu-flyout");
	});
	$(".close-menu .time").on("click", function () {
		console.log("menu close clicked ...");
		$(".primary-menu").removeClass("menu-flyout");
	});

	$(function () {
		$(".video-icon ").fancybox({
			width: 640,
			height: 400,
			type: "iframe",
		});
	});

	// hero baneeer slider
	$(".hero-box").owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 1,
				nav: false,
			},
			1000: {
				items: 1,
				nav: true,
				loop: true,
				autoplay: true,
			},
		},
	});

	// client testimonial slider feedback

	$(".testimonial-caro").owlCarousel({
		loop: true,
		margin: 30,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 1,
				nav: false,
			},
			767: {
				items: 2,
				nav: true,
				loop: true,
				autoplay: true,
			},
			1000: {
				items: 3,
				nav: true,
				loop: true,
				autoplay: true,
			},
		},
	});
});
