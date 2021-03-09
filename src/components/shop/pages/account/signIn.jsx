import { useState } from "react";
import {useDispatch} from "react-redux";

import {sendForm} from "./sendForm";
import {SIGN_IN} from "../../../../redux/actions/accountAction";
import {SET_ERROR} from "../../../../redux/actions/errorsAction";

import Button from "../../../button";

export default () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        login: '',
        password: ''
    });

    const inputHandler = (e)=>{
        const value = e.target.value;
        const field = e.target.getAttribute("id");

        setValues({
            ...values,
            [field]: value
        })
    }

    const sendFormHandler = (uri) => {
        sendForm(uri)
            .then(({ data }) => {
                if (data.errors.length > 0) {
                    dispatch(SET_ERROR(data.errors));
                } else {
                    dispatch(SIGN_IN({ login: data.login, name: data.name }));
                }
            });
    }

    return (
        <>
            <label>
                Логин:
                    <input type="text" value={values.login} id="login" onChange={inputHandler} className="account__input" />
            </label>
            <label>
                Пароль:
                    <input type="password" value={values.password} onChange={inputHandler} id="password" className="account__input" />
            </label>
            <Button Class={["submit"]} cb={()=>sendFormHandler("/signin")}>Вход</Button>
        </>
    )
}