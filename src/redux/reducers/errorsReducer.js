const initialState = {
    errors: []
}

export default (state = initialState, {type,payload})=>{
    switch(type){
        case "SET_ERROR":
            return {
                ...state,
                errors: [...state.errors, payload]
            }
        case "REMOVE_ERROR":
            return {
                ...state,
                errors: state.errors.filter(error=>error != payload)
            }

        default: return state;
    }
}