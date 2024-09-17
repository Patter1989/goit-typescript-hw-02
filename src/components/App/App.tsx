// src/App.tsx
import React, {FC, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Section from "../Section/Section";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { requestPicturesBySearchValue } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import {Image} from "./App.types"


const App: FC = () => {
	const [pictures, setPictures] = useState<Image[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean | null>(null);
	const [searchedPic, setSearchedPic] = useState<string>("");
	const [modalData, setModalData] = useState<string | null>(null);
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [pages, setPages] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);

	useEffect(() => {
		if (!searchedPic) return;
		async function fetchImagesBySearchValue() {
			try {
				setLoading(true);
				const response = await requestPicturesBySearchValue(searchedPic, pages);

				if (response.results.length === 0) {
					toast.error("No matches, please change your request!");
					return;
				}
				setPictures((prevPictures) => {
					if (!Array.isArray(prevPictures)) {
						return response.results;
					}
					return [...prevPictures, ...response.results];
				});
				setTotalPages(response.total);
				setError(null);
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchImagesBySearchValue();
	}, [searchedPic, pages]);

	const onSubmit = (inputValue: string): void => {
		setSearchedPic(inputValue);
		setPictures(null);
		setPages(1);
	};

	const handleClick = (targetId: string) => {
		setModalData(targetId);
		setModalIsOpen(true);
	};

	const onCloseModal = () => {
		setModalIsOpen(false);
	};

	const onLoadingMore = () => {
		setPages(pages + 1);
	};

	return (
		<div>
			<SearchBar onSubmit={onSubmit} />
			<Toaster
				position='top-center'
				containerStyle={{
					top: 40,
					left: 20,
					bottom: 20,
					right: 20,
				}}
			/>
			<Section>
				{error && <ErrorMessage />}
				<ImageGallery
					pictures={pictures}
					handleClick={handleClick}
				/>
			</Section>
			<Section>{loading && <Loader />}</Section>
			{Array.isArray(pictures) && pictures.length && totalPages !== pages && (
				<LoadMoreBtn onLoadingMore={onLoadingMore} />
			)}
			<ImageModal
				isOpen={modalIsOpen}
				modalData={modalData}
				onCloseModal={onCloseModal}
			/>
		</div>
	);
};

export default App;
