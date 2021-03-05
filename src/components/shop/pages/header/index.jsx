import {Link} from "react-router-dom";

export default () => {
    return (
      <header>
        <img src="/assets/img/logo.png" alt="logotype" className="logo" />
        <div className="menu">
          <Link to="/" className="menu__link">Главная</Link>
          <Link to="/cart" className="menu__link">Корзина</Link>
          <Link to="/account" className="menu__link">Войти</Link>
        </div>
      </header>
    );
  };
  