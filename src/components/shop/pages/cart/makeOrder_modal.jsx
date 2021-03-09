import { useState } from "react";
import Button from "../../../button";

export default ({ cb, totalPrice }) => {
  const [values, setValues] = useState({
    street: "",
    home_num: "",
  });

  const inputHandler = (e) => {
    const fieldName = e.target.getAttribute("id");
    const value = e.target.value;

    setValues({
      ...values,
      [fieldName]: value,
    });
  };

  window.addEventListener("click", (e) => {
    const {target }= e;
    if (target.classList.contains("order-modal__close") || target.classList.contains("order-modal-wrapper")) cb(false);
  });

  return (
    <div className="order-modal-wrapper">
      <div className="order-modal">
        <div className="order-modal__close cross">&times;</div>

        <h3 className="order-modal__header">Оформление заказа</h3>

        <input
          type="text"
          value={values.street}
          onChange={inputHandler}
          className="adress-input street"
          id="street"
          placeholder="Улица"
        />
        <input
          type="text"
          value={values.home_num}
          onChange={inputHandler}
          className="adress-input home_num"
          id="home_num"
          placeholder="Номер дома"
        />
        <div className="order-modal__total-price">
          Общая сумма заказа: <b>{totalPrice} ₽</b>
        </div>
        <Button Class={['make-order']} cb={null}>Оформить заказ</Button>
      </div>
    </div>
  );
};
