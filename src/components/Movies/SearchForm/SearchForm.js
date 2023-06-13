import "./SearchForm.css";
import { useState } from "react";

const SearchForm = () => {
  //временно посмотреть стили :)
  const [isFilterButton, setIsFilterButton] = useState(false);

  return (
		<>
			<div className="searchform">
				<div className="searchform__form">
					<input
						className="searchform__input"
						type="text"
						placeholder="Фильм"
					/>
					<button className="searchform__search links">Найти</button>
				</div>
				<div className="searchform__filter">
          <button
            className={`searchform__filter-button links ${
              isFilterButton && "searchform__filter-button_off"
            }`}
            onClick={() => setIsFilterButton(!isFilterButton)}
          />
					<p className="searchform__filter-text">Короткометражки</p>
        </div>
				<div className="searchform__line"></div>
			</div>
		</>
  );
};

export default SearchForm;
