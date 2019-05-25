import { stat } from "fs";
import Constant from './constants'

const initialState = {
    email:'',
    Loading:false,
    form : false,
    showBackdrop:false,
    checked:true,
    HideColumn:'',
    showSideDrawer:true,
    applicationName:"Coding Challenge",
    darkTheme:false,
    AppTheme:"",
    sideDrawerTheme :  '#33373d',
    lightTheme:true,
    headerTextSize : "16px",
    HeaderFontStyle : "normal",
    elementTextSize : "16px",
    elementFontStyle:"normal",
    header : true,
    element:true,
    
    headerlargeTextSize:false,
    headerMediumTextSize:true,
    headerSmallTextSize:false,
    headerNormalFontStyle:true,
    headerItalicFontStyle:false,
    headerObliqueFontStyle:false,

         
    elementlargeTextSize:false,
    elementlMediumTextSize:true,
    elementSmallTextSize:false,
    elementNormalFontStyle:true,
    elementItalicFontStyle:false,
    elementObliqueFontStyle:false,

        

}

const reducer = (state = initialState, action) => {

    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridHeader && action.payload.name === Constant.textSizeLarge ) {
        return {
            ...state,
           
                headerlargeTextSize:true,
                headerMediumTextSize:false,
                headerSmallTextSize:false,
                headerTextSize:"20px"
        }
    }

    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridHeader && action.payload.name === Constant.textSizeMedium ) {
        return {
            ...state,
            headerlargeTextSize:false,
            headerMediumTextSize:true,
            headerSmallTextSize:false,
            headerTextSize:"17px"
        
        }
    }

    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridHeader && action.payload.name === Constant.textSizeSmall ) {
        return {
            ...state,
            headerlargeTextSize:false,
            headerMediumTextSize:false,
            headerSmallTextSize:true,
           headerTextSize:"14px"
        }
    }
    
    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridHeader && action.payload.name === Constant.fontStyleNormal ) {
        return {
            ...state,
            headerNormalFontStyle:true,
            headerItalicFontStyle:false,
            headerObliqueFontStyle:false,
            HeaderFontStyle : "normal",
        }
    }

       
    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridHeader && action.payload.name === Constant.fontStyleItalic ) {
        return {
            ...state,
            headerNormalFontStyle:false,
            headerItalicFontStyle:true,
            headerObliqueFontStyle:false,
            HeaderFontStyle : "italic",
        }
    }

    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridHeader && action.payload.name === Constant.fontStyleOblique ) {
        return {
            ...state,
            headerNormalFontStyle:false,
            headerItalicFontStyle:false,
            headerObliqueFontStyle:true,
            HeaderFontStyle : "oblique",
        }
    }

    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridElements && action.payload.name === Constant.textSizeLarge ) {
        return {
            ...state,
            elementlargeTextSize:true,
            elementlMediumTextSize:false,
            elementSmallTextSize:false,
            elementTextSize:"20px"
        }
    }

    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridElements && action.payload.name === Constant.textSizeMedium ) {
        return {
            ...state,
            elementlargeTextSize:false,
            elementlMediumTextSize:true,
            elementSmallTextSize:false,
            elementTextSize:"17px"
        
        }
    }

    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridElements && action.payload.name === Constant.textSizeSmall ) {
        return {
            ...state,
            elementlargeTextSize:false,
            elementlMediumTextSize:false,
            elementSmallTextSize:true,
            elementTextSize:"14px"
        }
    }
    
    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridElements && action.payload.name === Constant.fontStyleNormal ) {
        return {
            ...state,
            elementNormalFontStyle:true,
            elementItalicFontStyle:false,
            elementObliqueFontStyle:false,
            elementFontStyle : "normal",
        }
    }

       
    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridElements && action.payload.name === Constant.fontStyleItalic ) {
        return {
            ...state,
            elementNormalFontStyle:false,
            elementItalicFontStyle:true,
            elementObliqueFontStyle:false,
            elementFontStyle : "italic",
        }
    }

    if(action.type === "THEMECHANED" && action.payload.identifier === Constant.gridElements && action.payload.name === Constant.fontStyleOblique ) {
        return {
            ...state,
            elementNormalFontStyle:false,
            elementItalicFontStyle:false,
            elementObliqueFontStyle:true,
            elementFontStyle : "oblique",
        }
    }



   
   
  
  if(action.type === "THEMECHANED" && action.payload.name === Constant.darkTheme ) {
        return {
            ...state,
            darkTheme: true,
            lightTheme: false,
            AppTheme:"#33373d",
            sideDrawerTheme : '#4b6da0',
        }
    }
    if(action.type === "THEMECHANED" && action.payload.name === Constant.lightTheme ) {
        return {
            ...state,
            darkTheme: false,
            lightTheme: true,
            AppTheme:"",
            sideDrawerTheme : '#33373d',
        }
    }
   
    
    if(action.type === "SIDEDRAWER") {
            return {
                ...state,
                showBackdrop:true,
                showSideDrawer:true
            }
    }
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

    if(action.type === "APPNAMECHANING") {
        return {
            ...state,
            applicationName : action.payload
           
        }
    }

    if(action.type === "APPNAMECHANGED") {
        return {
            ...state,
            applicationName : action.payload
           
        }
    }
    return state;
};

export default reducer;