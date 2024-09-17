import toast from "react-hot-toast";
import css from "./SearchBar.module.css"
import { IoMdSearch } from "react-icons/io";
import { FC } from "react";
// import toast, {Toaster} from "react-hot-toast";

interface SearchBarProps {
	onSubmit: (inputValue: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const onHandleSubmit = (event: any) => {
		event.preventDefault();
		const inputValue = event.currentTarget.elements.searchedPic.value;
		inputValue === ""
			? toast.error("please write something")
			: onSubmit(inputValue);
	};
	return (
		<header className={css.header}>
			<form
				onSubmit={onHandleSubmit}
				className={css.form}
			>
				<input
					className={css.input}
					name='searchedPic'
					type='text'
					autoComplete='off'
					autoFocus
					placeholder='Search images and photos'
				/>
				<button
					type='submit'
					className={css.btn}
				>
					<IoMdSearch />
				</button>
			</form>
		</header>
	);
};

export default SearchBar
