import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { useState } from "react";

const MoviesCard = ({ card }) => {
  const { pathname } = useLocation();

  //временно, чтоб посмотреть)
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(true);
  }

  // временно
  function handleDeleteClick() {
    setIsLiked(false);
  }

  return (
		<li className="card">
			<div className="card__box">
				<div>
					<h2 className="card__title">{card.title}</h2>
					<p className="card__duration">{card.duration}</p>
				</div>
				{pathname === "/movies" && (
					<button
						className={`card__button links card__button_${
							isLiked ? "like" : "unlike"
						}`}
						type="button"
						onClick={isLiked ? handleDeleteClick : handleLikeClick}
					/>
				)}
				{pathname === "/saved-movies" && (
					<button
						className="card__button links card__button_delete"
						type="button"
					/>
				)}
			</div>
			<img className="card__image" alt={card.title} src={card.image} />
		</li>
  );
};

export default MoviesCard;
