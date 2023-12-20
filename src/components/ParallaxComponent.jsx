import { Parallax } from "react-parallax";
import styles from "./ParallaxComponent.module.css";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const images = [image1, image2, image3];
let parallaxType;

function ParallaxComponent({
	strength,
	blurMin = undefined,
	blurMax = undefined,
}) {
	//To set the type of Parallax Effect over the image
	if (strength > 0 && (blurMin || blurMax)) {
		parallaxType = "Parallax with Dynamic Blur Effect";
	} else if (strength < 0 && (blurMin || blurMax)) {
		parallaxType = "Reverse Parallax with Blur";
	} else if (strength > 0 && !blurMin && !blurMax) {
		parallaxType = "Normal Parallax Effect";
	} else if (strength < 0 && !blurMin && !blurMax) {
		parallaxType = "Reverse Parallax Effect";
	}

	return (
		<div>
			{images.map((image, index) => {
				return (
					<Parallax
						strength={strength}
						blur={{ min: blurMin, max: blurMax }}
						bgImage={image}
						key={index}
					>
						<div className={styles.imgContent}>
							<div className={styles.textContent}>
								{parallaxType}
							</div>
						</div>
					</Parallax>
				);
			})}
		</div>
	);
}

export default ParallaxComponent;
