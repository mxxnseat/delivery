import { useState } from "react";
import { useDispatch } from "react-redux";

import { setCartItem } from "../../../../redux/actions/cartAction";

import Button from "../../../button";

export default ({ name, imageUrl, sizes, price, id }) => {
  const dispatch = useDispatch();
  const [selectedSize, selectSize] = useState(sizes[0]);

  const clickHandler = () => {
    dispatch(setCartItem({ name, imageUrl, price, id, size: selectedSize }));
  };

  return (
    <div className="product__item">
      <img className="product__image" src={imageUrl} />
      <div className="product__name">{name}</div>
      <div className="product__sizes">
        {sizes.map((size,index) => {
          return (
            <div key={size} onClick={()=>selectSize(size)} className={size==selectedSize ? "active product__sizes_size" : "product__sizes_size"}>
              {size} см
            </div>
          );
        })}
      </div>
      <div className="product__price">{price} ₽</div>
      <Button Class={["product__buy"]} cb={clickHandler}>Купить</Button>
    </div>
  );
};
