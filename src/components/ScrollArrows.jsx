import styles from "./ScrollArrows.module.css";

// Arrows component to be displayed on the page
function ScrollArrows() {
	function handleScroll(direction) {
		// To get the current scrolled length along Y axis from top of the page
		const currentScroll = window.scrollY;

		// To measure the current viewport height
		const pageHeight = window.innerHeight;

		// Length that is to be added to current scroll || direction times (+/-1) the viewport height
		const scrollAmount = pageHeight * direction;

		// Top of the browser window moves from the top of the page till the below 'top' value
		window.scrollTo({
			top: currentScroll + scrollAmount,
			behavior: "smooth",
		});
	}

	return (
		<div className={styles.arrowsContainer}>
			{/* Up Arrow */}
			<div className={styles.arrow} onClick={() => handleScroll(-1)}>
				&#8593;
			</div>

			{/* Down Arrow */}
			<div className={styles.arrow} onClick={() => handleScroll(-1)}>
				&#8595;
			</div>
		</div>
	);
}

export default ScrollArrows;
