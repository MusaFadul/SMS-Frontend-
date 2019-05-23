import { stat } from "fs";


const initialState = {
    email:'',
    form : null
}

// Reducer
const reducer = (state = initialState, action) => {
    if(action.type === "REGISTRATION_FORM") {

        return {
            form : true
        }
    }
    console.log(state.form)
    return state;
};

export default reducer;