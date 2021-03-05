export default () => {
  return (
    <div className="order__item">
      <div className="order__info">
        <div className="order__num">
          № заказа: <span className="order__num__value">1252</span>
        </div>
        <div className="order__goods">
          Товары: <span className="order__popup_arrow"></span>
        </div>
        <div className="order__adress">
          Адрес: <span className="order__adress__value"></span>
        </div>
      </div>

      <div className="accepting">
        <div className="accepting__item">
          <img src="/assets/img/success.png" alt="success" />
        </div>
        <div className="accepting__item">
          <img src="/assets/img/cross.png" alt="decline" />
        </div>
      </div>
    </div>
  );
};
