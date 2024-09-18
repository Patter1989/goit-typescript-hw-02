import { FC } from "react";
import css from "./ImageModal.module.css"
import Modal from "react-modal";



Modal.setAppElement("#root");

interface ImageModalProps {
	modalData: string;
	isOpen: boolean;
	onCloseModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ modalData, isOpen, onCloseModal }) => {
    
    
  return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onCloseModal}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			style={{
				overlay: {
					backgroundColor: "rgba(0,0,0,0.8)",
					},
				content: {
					margin:"0 auto",
					border: "none",
					background: "#fff",
					overflow: "off",
					WebkitOverflowScrolling: "touch",
					borderRadius: "4px",
					outline: "none",
					padding: "0px",
					width: "60%",
					height: "80%",
					boxSizing: "border-box",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				},
			}}
		>
			<img
				className={css.pic}
				src={modalData}
			/>
		</Modal>
	);
}

export default ImageModal
