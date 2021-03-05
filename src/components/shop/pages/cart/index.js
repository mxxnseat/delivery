import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

import Item from "./item";
import OrderModal from "./makeOrder_modal";

import Button from "../../../button";


import "./style.scss";

export default () => {
    const cart = useSelector(({ cart }) => cart);
    const [modal, openModal] = useState(false);
    return (
        <div className="cart">
            {
                cart.cart.length ?
                    <>{ cart.cart.map((item, index) => <Item key={item.id+item.size+index} {...item} />) }
                        <div className="cart__total-price">Общая сумма заказа: {cart.totalPrice} ₽</div>
                        <Button cb={()=>openModal(true)}>Оформить заказ</Button>
                        {modal ? <OrderModal cb={openModal} totalPrice={cart.totalPrice} /> : ''}
                    </>
                    :
                    <div className="cart__empty">
                        Корзина пуста. <Link to="/" className="cart__empty_link">Перейти на витрину</Link>
                    </div>
            }
        </div>
    )
}