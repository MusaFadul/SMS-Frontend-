import { stat } from "fs";


const initialState = {
    email:'',
    Loading:false,
    form : true,
    showBackdrop:false,
    checked:true,
    HideColumn:'',
    showSideDrawer:false
}

const reducer = (state = initialState, action) => {
    if(action.type === "REGISTRATION_FORM") {
        return {
            ...state,
            form : true,
            email:''
        }
    }
    if(action.type === "SIDEDRAWER") {
            return {
                ...state,
                showBackdrop:true,
                showSideDrawer:true
            }
    }
    if(action.type === "HIDEBACKDROP") {
        return {
            ...state,
            showBackdrop:false,
            showSideDrawer:false
            
        }
    }
    if(action.type === "UNCHECKED" && action.payload.name ) {
        return {
            ...state,
            checked : action.payload.checked,
            HideColumn: action.payload.name
            
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