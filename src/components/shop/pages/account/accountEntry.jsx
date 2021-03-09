import {useState} from "react";

import SignIn from "./signIn";
import SignUp from "./signUp";

export default () => {
    const [type, setType] = useState({ type: "signin" })

    const typeHandler = (e) => {
        const type = e.target.getAttribute("id");

        setType({ type });
    }

    return (
        <>
            <div className="account__action">
                <div className={type.type == "signin" ? "account__action__type active" : "account__action__type"} id="signin" onClick={typeHandler}>Вход</div>
                <div className={type.type == "signup" ? "account__action__type active" : "account__action__type"} id="signup" onClick={typeHandler}>Регистрация</div>
            </div>
            <form className="account__form" onSubmit={e => e.preventDefault()}>
                {type.type === "signin" ? <SignIn /> : <SignUp />}
            </form>
        </>
    )
}