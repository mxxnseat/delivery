import { useDispatch } from "react-redux";
import { REMOVE_ERROR } from "../../../../redux/actions/errorsAction";


export default ({ message, index }) => {
    const dispatch = useDispatch();

    const deleteError = () => {
        setTimeout(() => {
            setTimeout(() => dispatch(REMOVE_ERROR(message)), 600);

            const error = document.querySelectorAll(".error__item");
            error[index] && error[index].classList.add("hiding");
        }, 3000);
    }

    return (
        <div className="error__item" onLoad={deleteError()}>
            {message}
        </div>
    )
}