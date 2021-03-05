export default () => {
  return (
    <header>
      <img src="/assets/img/logo.png" alt="logotype" className="logo" />
      <div className="menu">
        <a href="#" className="menu__link">
          Мои заказы
        </a>
        <a href="#" className="menu__link">
          Выполненные
        </a>
        <a href="#" className="menu__link">
          Заказы
        </a>
      </div>
      <div className="menu account">
        <a href="#" className="menu__link">
          В магазин
        </a>
        <a href="#" className="menu__link">
          Выйти
        </a>
      </div>
    </header>
  );
};
