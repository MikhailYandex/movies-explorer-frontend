import "./AboutMe.css";
import aboutMe from "../../../images/aboutme.jpg";

const AboutMe = () => {
  return (
    <section className="aboutme box" id="about-me">
      <h2 className="aboutme__title title">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__box">
          <h3 className="aboutme__name">Михаил</h3>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 34 года</p>
          <p className="aboutme__text">
            Я живу в г.Самара, закончил политехнический факультет ЗКАТУ(г.Уральск).
						Уже как больше года занимаюсь фронтенд разработкой, прохожу курс в Яндекс Практикум.
						Из хобби: люблю читать книги православной тематики, также люблю ходить в 
						фитнес, бассейн, заниматься бегом и играть волейбол.
          </p>
          <a
            className="aboutme__github links"
            href="https://github.com/MikhailYandex"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={aboutMe} className="aboutme__image" alt="Фото студента" />
      </div>
    </section>
  );
};

export default AboutMe;
