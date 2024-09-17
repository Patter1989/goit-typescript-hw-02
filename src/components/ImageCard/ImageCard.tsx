import { FC } from "react";
import { Image } from "../App/App.types";
import css from "./ImageCard.module.css"

interface ImageProps {
	picture: Image
}

const ImageCard: FC<ImageProps> = ({picture}) => {
	return (
		<div className={css.imgWrapper}>
			<img
				className={css.pic}
				src={picture.urls.small}
				alt={picture.alt_description}
				
			/>
		</div>
	);
}

export default ImageCard
