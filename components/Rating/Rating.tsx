import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: RatingProps
): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((_: JSX.Element, idx: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: idx < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDispay(idx + 1)}
					onMouseLeave={() => changeDispay(rating)}
					onClick={() => onClick(idx + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(
							e: KeyboardEvent<SVGElement>
						) => isEditable && handleSpace(idx + 1, e)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};


	const changeDispay = (idx: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(idx);
	};

	const onClick = (idx: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(idx);
	};

	const handleSpace = (idx: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(idx);
	};

	return (
		<div {...props}>
			{ratingArray.map((el, idx) => (<span key={idx}>{el}</span>))}
		</div>
	);
};