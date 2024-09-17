import { FC } from 'react';
import css from './LoadMoreBtn.module.css'
interface OnLoadingMoreProps {
	onLoadingMore: () => void;
}
const LoadMoreBtn: FC<OnLoadingMoreProps> = ({ onLoadingMore}) => {
	return (
		<div className={css.btnWrapper}>
			<button
				type='button'
				onClick={onLoadingMore}
				className={css.btn}
			>
				load more...
			</button>
		</div>
	);
}

export default LoadMoreBtn
