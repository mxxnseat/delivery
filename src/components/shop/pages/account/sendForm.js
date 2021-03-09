import axios from "axios";


export const sendForm = (uri) => {
    let data = {};
    const inputs = document.querySelectorAll(".account__form .account__input");

    inputs.forEach(input => {
        data = {
            ...data,
            [input.getAttribute("id")]: input.value
        };
    });

    console.log(data);

    return axios.post(uri, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}