import { Parallax } from "react-parallax";
import styles from "./ParallaxComponent.module.css";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const images = [image1, image2, image3];

function ParallaxComponent({
	strength,
	blurMin = undefined,
	blurMax = undefined,
}) {
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
								Parallax Effect
							</div>
						</div>
					</Parallax>
				);
			})}
		</div>
	);
}

export default ParallaxComponent;
