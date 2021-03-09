const initialState = {
    login: '',
    name: '',
    isLoging: false
}

export default (state=initialState, {type,payload})=>{
    switch(type){
        case 'SIGN_IN':
            return {
                ...state,
                login: payload.login,
                name:payload.name,
                isLoging: true
        }
        case 'ACCOUNT_EXIT':
            return {
                ...state,
                login: '',
                name: '',
                isLoging: false
            }
        default: return state;
    }
}