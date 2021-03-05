import { useDispatch } from "react-redux";

import {removeCartItem, cartItemMinus, cartItemPlus} from "../../../../redux/actions/cartAction";

export default ({ name, totalPrice, count, id, size, cartID}) => {
  const dispatch = useDispatch();
  return (
    <div className="cart__item">
      <div className="cart__item__name">{name}</div>
      <div className="cart__item__count">x{count}</div>
      <div className="cart__item__size">{size} см</div>
      <div className="cart__item__count-changer">
        <button className="cart__item__count-changer__minus btn" onClick={()=>dispatch(cartItemMinus(cartID))}>-</button>
        <button className="cart__item__count-changer__plus btn" onClick={()=>dispatch(cartItemPlus(cartID))}>+</button>
      </div>
      <div className="cart__item__price">{totalPrice} ₽</div>
      <div onClick={()=>dispatch(removeCartItem(cartID))} className="cart__item__remove cross">&times;</div>
    </div>
  );
};
