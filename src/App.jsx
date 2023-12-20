import ScrollArrows from "./components/ScrollArrows";

import "./App.css";
import ParallaxComponent from "./components/ParallaxComponent";

function App() {
	return (
		<div>
			<ScrollArrows />
			<ParallaxComponent
				/* Pass in a negative value as strength for reverse parallax effect */
				strength={-600}
				/* Pass in Min and Max blur value for dynamic blur effect || provide null if blur effect is not needed*/
				blurMin={-15}
				blurMax={15}
			/>
		</div>
	);
}

export default App;
