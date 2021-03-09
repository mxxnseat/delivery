import Button from "../../../button";

export default ()=>{
    return (
        <>
            <div className="header">Личный кабинет</div>
            <div className="account__wrapper">
                <div className="account__row">
                    <div className="account__info">
                        <div className="account__login">
                            Мой Логин: <b>login</b>
                        </div>
                        <div className="account__name">
                            Мое Имя: <b>Иван</b>
                        </div>
                    </div>
                    <div className="account__promo">
                        <label htmlFor="promo">
                            Промокод:
                        </label>
                        <input type="text" className="account__promo__input" id="promo" />
                        <Button Class={["account__promo__activate"]} cb={null}>Активировать</Button>
                    </div>
                </div>

                <div className="order">
                    <div className="order__all order__type">
                        <div className="order__header">Мои заказы</div>
                        <div className="order__item">
                            <div className="order__item__num">1</div>
                            <div className="order__item__price">5600 Р</div>
                            <div className="order__item__order-info">Информация о заказе</div>
                        </div>
                    </div>
                    <div className="order__handing order__type">
                        <div className="order__header">Текущий заказ</div>
                    </div>
                </div>
            </div>
        </>
    )
}