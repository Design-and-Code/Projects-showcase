/*
 * Copyright (c) 2021 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
 */

jQuery(document).ready(function () {
	"use strict";

	// here all ready functions

	ryker_tm_nav_bg();
	ryker_tm_trigger_menu();
	ryker_tm_modalbox_news();
	ryker_tm_modalbox_portfolio();
	ryker_tm_cursor();
	ryker_tm_imgtosvg();
	ryker_tm_popup();
	ryker_tm_data_images();
	ryker_tm_contact_form();
	myIsotope();
	ryker_tm_jarallax();
	ryker_tm_owl_carousel();

	jQuery(window).load("body", function () {
		ryker_tm_my_load();
	});
	jQuery(window).on("resize", function () {
		myIsotope();
	});
});

// ------------------------------------------------
// ---------------   FUNCTIONS    -----------------
// ------------------------------------------------

// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery(".anchor_nav").onePageNav();

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container) {
	"use strict";

	container.find(".progress_inner").each(function () {
		var progress = jQuery(this);
		var pValue = parseInt(progress.data("value"), 10);
		var pColor = progress.data("color");
		var pBarWrap = progress.find(".bar");
		var pBar = progress.find(".bar_in");
		pBar.css({ width: pValue + "%", backgroundColor: pColor });
		setTimeout(function () {
			pBarWrap.addClass("open");
		});
	});
}

jQuery(".ryker_progress").each(function () {
	"use strict";

	var pWrap = jQuery(this);
	pWrap.waypoint({
		handler: function () {
			tdProgress(pWrap);
		},
		offset: "90%",
	});
});

// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function ryker_tm_nav_bg() {
	"use strict";

	jQuery(window).on("scroll", function () {
		var menu = jQuery(".ryker_tm_topbar");
		var WinOffset = jQuery(window).scrollTop();

		if (WinOffset >= 100) {
			menu.addClass("animate");
		} else {
			menu.removeClass("animate");
		}
	});
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function ryker_tm_trigger_menu() {
	"use strict";

	var audio1 = jQuery("#audio1");
	var audio2 = jQuery("#audio2");
	var hamburger = jQuery(".trigger .hamburger");
	var list = jQuery(".ryker_tm_topbar .list ul li");
	var mobileMenu = jQuery(".ryker_tm_mobile_menu .dropdown");
	var mobileMenuList = jQuery(
		".ryker_tm_mobile_menu .dropdown .dropdown_inner ul li a"
	);

	hamburger.on("click", function () {
		var element = jQuery(this);

		if (element.hasClass("is-active")) {
			element.removeClass("is-active");
			audio1[0].play();
			list.removeClass("opened");
			mobileMenu.slideUp();
		} else {
			element.addClass("is-active");
			audio2[0].play();
			list.each(function (i) {
				var ele = jQuery(this);
				setTimeout(function () {
					ele.addClass("opened");
				}, i * 50);
			});
			mobileMenu.slideDown();
		}
		return false;
	});

	mobileMenuList.on("click", function () {
		jQuery(".trigger .hamburger").removeClass("is-active");
		mobileMenu.slideUp();
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function ryker_tm_modalbox_news() {
	"use strict";

	var modalBox = jQuery(".ryker_tm_modalbox");
	var list = jQuery(".ryker_tm_news ul li");
	var closePopup = modalBox.find(".close");

	list.each(function () {
		var element = jQuery(this);
		var details = element.find(".list_inner").html();
		var buttons = element.find(".details a, .ryker_tm_full_link");
		var mainImage = element.find(".main");
		var imgData = mainImage.data("img-url");
		var title = element.find(".title");
		var titleHref = element.find(".title a").html();
		buttons.on("click", function () {
			modalBox.addClass("opened");
			modalBox.find(".description_wrap").html(details);
			mainImage = modalBox.find(".main");
			mainImage.css({ backgroundImage: "url(" + imgData + ")" });
			title = modalBox.find(".title");
			title.html(titleHref);
			ryker_tm_imgtosvg();
			return false;
		});
	});
	closePopup.on("click", function () {
		modalBox.removeClass("opened");
		modalBox.find(".description_wrap").html("");
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX PORTFOLIO  --------------
// -------------------------------------------------

function ryker_tm_modalbox_portfolio() {
	"use strict";

	var modalBox = jQuery(".ryker_tm_modalbox");
	var button = jQuery(".ryker_tm_portfolio .popup_info");

	button.on("click", function () {
		var element = jQuery(this);
		var parent = element.closest("li");
		var details = parent.find(".portfolio_hidden_infos").html();
		var titles = parent.find(".details").html();
		var image = parent.find(".image").html();

		modalBox.addClass("opened");
		modalBox.find(".description_wrap").html(details);
		modalBox.find(".top_image").html(image);
		modalBox.find(".portfolio_main_title").html(titles);

		return false;
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function ryker_tm_preloader() {
	"use strict";

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
		navigator.userAgent
	)
		? true
		: false;
	var preloader = $("#preloader");

	if (!isMobile) {
		setTimeout(function () {
			preloader.addClass("preloaded");
		}, 800);
		setTimeout(function () {
			preloader.remove();
		}, 1500);
	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function ryker_tm_my_load() {
	"use strict";

	var speed = 500;
	setTimeout(function () {
		ryker_tm_preloader();
	}, speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function ryker_tm_cursor() {
	"use strict";

	var myCursor = jQuery(".mouse-cursor");

	if (myCursor.length) {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n,
				i = 0,
				o = !1;
			(window.onmousemove = function (s) {
				o ||
					(t.style.transform =
						"translate(" + s.clientX + "px, " + s.clientY + "px)"),
					(e.style.transform =
						"translate(" + s.clientX + "px, " + s.clientY + "px)"),
					(n = s.clientY),
					(i = s.clientX);
			}),
				$("body").on(
					"mouseenter",
					"a, .ryker_tm_topbar .trigger, .cursor-pointer",
					function () {
						e.classList.add("cursor-hover"),
							t.classList.add("cursor-hover");
					}
				),
				$("body").on(
					"mouseleave",
					"a, .ryker_tm_topbar .trigger, .cursor-pointer",
					function () {
						($(this).is("a") &&
							$(this).closest(".cursor-pointer").length) ||
							(e.classList.remove("cursor-hover"),
							t.classList.remove("cursor-hover"));
					}
				),
				(e.style.visibility = "visible"),
				(t.style.visibility = "visible");
		}
	}
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function ryker_tm_imgtosvg() {
	"use strict";

	jQuery("img.svg").each(function () {
		var jQueryimg = jQuery(this);
		var imgClass = jQueryimg.attr("class");
		var imgURL = jQueryimg.attr("src");

		jQuery.get(
			imgURL,
			function (data) {
				// Get the SVG tag, ignore the rest
				var jQuerysvg = jQuery(data).find("svg");

				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== "undefined") {
					jQuerysvg = jQuerysvg.attr(
						"class",
						imgClass + " replaced-svg"
					);
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				jQuerysvg = jQuerysvg.removeAttr("xmlns:a");

				// Replace image with new SVG
				jQueryimg.replaceWith(jQuerysvg);
			},
			"xml"
		);
	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function ryker_tm_popup() {
	"use strict";

	jQuery(".gallery_zoom").each(function () {
		// the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: "a.zoom", // the selector for gallery item
			type: "image",
			gallery: {
				enabled: true,
			},
			removalDelay: 300,
			mainClass: "mfp-fade",
		});
	});
	jQuery(".popup-youtube, .popup-vimeo").each(function () {
		// the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
	});

	jQuery(".soundcloude_link").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function ryker_tm_data_images() {
	"use strict";

	var data = jQuery("*[data-img-url]");

	data.each(function () {
		var element = jQuery(this);
		var url = element.data("img-url");
		element.css({ backgroundImage: "url(" + url + ")" });
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function ryker_tm_contact_form() {
	"use strict";

	jQuery(".contact_form #send_message").on("click", function () {
		var name = jQuery(".contact_form #name").val();
		var email = jQuery(".contact_form #email").val();
		var message = jQuery(".contact_form #message").val();
		var success = jQuery(".contact_form .returnmessage").data("success");

		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields
		if (name === "" || email === "" || message === "") {
			jQuery("div.empty_notice").slideDown(500).delay(2000).slideUp(500);
		} else {
			// Returns successful data submission message when the entered information is stored in database.
			jQuery(".contact_form .returnmessage").append(""); //Append returned message to message paragraph

			jQuery(".contact_form .returnmessage").append(
				"<span class='contact_success'>" + success + "</span>"
			);
			jQuery(".contact_form .returnmessage")
				.slideDown(500)
				.delay(4000)
				.slideUp(500);

			$("#contact_form").submit();
			$(".contact_form #name").val("");
			$(".contact_form #email").val("");
			$(".contact_form #message").val("");
		}
	});
}

function myIsotope() {
	"use strict";

	$(".grid").isotope({
		// options
		itemSelector: ".grid-item",
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function ryker_tm_jarallax() {
	"use strict";

	jQuery(".jarallax").each(function () {
		var element = jQuery(this);
		var customSpeed = element.data("speed");

		if (customSpeed !== "undefined" && customSpeed !== "") {
			customSpeed = customSpeed;
		} else {
			customSpeed = 0.5;
		}

		element.jarallax({
			speed: customSpeed,
			automaticResize: true,
		});
	});
}

$("#grouploop").grouploop({
	velocity: 1,
	forward: false,
	childNode: ".item",
	childWrapper: ".item-wrap",
	pauseOnHover: false,
	complete: function () {
		console.log("init");
	},
});

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function ryker_tm_owl_carousel() {
	"use strict";

	var carousel = jQuery(".ryker_tm_testimonials .owl-carousel");
	carousel.owlCarousel({
		loop: true,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		items: 1,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 6000,
		smartSpeed: 2000,
		margin: 0,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive: {
			0: {
				mouseDrag: false,
				touchDrag: true,
			},
			1100: {
				mouseDrag: true,
				touchDrag: true,
			},
		},
	});
	ryker_tm_imgtosvg();
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

new WOW().init();
