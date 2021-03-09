import { useSelector } from "react-redux";

import AccountEntry from "./accountEntry";
import AccountProfile from "./accountProfile";
import Error from "./error";

import "./style.scss";

export default () => {
    const account = useSelector(({ account }) => account);
    const error = useSelector(({ errors }) => errors);
    return (
        <div className="account">
            {error.errors.length ? <div className="error">
                {error.errors.map((error, index) => <Error message={error} key={index} index={index} />)}
            </div> : ''}
            {account.isLoging ? <AccountProfile /> : <AccountEntry />}
        </div>
    )
}