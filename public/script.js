// scroll name
$(window).on("scroll", function () {
	if (window.matchMedia("(max-width: 650px)").matches) {
		$(".scrollHeader").css(
			"font-size",
			$(this).scrollTop() * 0.1 + 50 + "px"
		);
	} else {
		$(".scrollHeader").css(
			"font-size",
			$(this).scrollTop() * 0.2 + 50 + "px"
		);
	}
});

//scroll portfolio
$(window).on("scroll", function () {
	$(".scrollPortfolio").css(
		"font-size",
		$(this).scrollTop() * 0.04 + 10 + "px"
	);
});
