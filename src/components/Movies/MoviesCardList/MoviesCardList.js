import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import movieImage1 from "../../../images/photo/movie1.jpg";
import movieImage2 from "../../../images/photo/movie2.jpg";
import movieImage3 from "../../../images/photo/movie3.jpg";
import movieImage4 from "../../../images/photo/movie4.jpg";
import movieImage5 from "../../../images/photo/movie5.jpg";
import movieImage6 from "../../../images/photo/movie6.jpg";
import movieImage7 from "../../../images/photo/movie7.jpg";
import movieImage8 from "../../../images/photo/movie8.jpg";
import movieImage9 from "../../../images/photo/movie9.jpg";
import movieImage10 from "../../../images/photo/movie10.jpg";
import movieImage11 from "../../../images/photo/movie11.jpg";
import movieImage12 from "../../../images/photo/movie12.jpg";

const MoviesCardList = () => {
  const cards = [
    {
      id: 1,
      image: movieImage1,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
    {
      id: 2,
      image: movieImage2,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
    {
      id: 3,
      image: movieImage3,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
    {
      id: 4,
      image: movieImage4,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
    {
      id: 5,
      image: movieImage5,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
    {
      id: 6,
      image: movieImage6,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
    {
      id: 7,
      image: movieImage7,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
    {
      id: 8,
      image: movieImage8,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
		{
      id: 8,
      image: movieImage9,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
		{
      id: 8,
      image: movieImage10,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
		{
      id: 8,
      image: movieImage11,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
		{
      id: 8,
      image: movieImage12,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
    },
  ];

  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card) => (
          <MoviesCard
            image={card.image}
            duration={card.duration}
            title={card.title}
            key={card.id}
            card={card}
          />
        ))}
      </ul>
      <button className="cards__button links" type="button">
        Еще
      </button>
    </section>
  );
};

export default MoviesCardList;
