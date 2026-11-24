document.addEventListener("DOMContentLoaded", () => {
	const scrollTopBtn = document.getElementById("scrollTopBtn");
	if (!scrollTopBtn) return;

	const SHOW_AFTER = 300; // px scrolled before the button appears

	const toggleButton = () => {
		scrollTopBtn.classList.toggle("is-visible", window.scrollY > SHOW_AFTER);
	};

	// Show/hide on scroll
	window.addEventListener("scroll", toggleButton, { passive: true });
	toggleButton(); // run once on load

	// Scroll to top on click
	scrollTopBtn.addEventListener("click", () => {
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		window.scrollTo({
			top: 0,
			behavior: reduceMotion ? "auto" : "smooth"
		});
	});
});