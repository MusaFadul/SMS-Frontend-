import { stat } from "fs";


const initialState = {
    email:'',
    Loading:false,
    form : true
}

const reducer = (state = initialState, action) => {
    if(action.type === "REGISTRATION_FORM") {
        return {
            ...state,
            form : true,
            email:''
        }
    }
    if(action.type === "GRID") {
            return {
                ...state,
                form : false,
            }
    }
    if(action.type === "REGISTRATIONED") {
        return {
            ...state,
            email: action.userCredentials.email,
            form : false,
        }
}
    return state;
};

export default reducer;