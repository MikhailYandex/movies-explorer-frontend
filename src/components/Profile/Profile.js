import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Михаил!</h2>
      <div className="profile__block">
        <p className="profile__key">Имя</p>
        <p className="profile__value">Михаил</p>
      </div>
      <div className="profile__line"></div>
      <div className="profile__block">
        <p className="profile__key">E-mail</p>
        <p className="profile__value">pochta@yandex.ru</p>
      </div>
      <button className="profile__button">Редактировать</button>
      <button className="profile__button profile__button_signout">
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
