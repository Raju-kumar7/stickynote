import { useSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"


export default function PrivateRoutes({children}){
    const {auth}= useSelector((state)=>state.userReducer)

    if (auth) {
        return children
    }else{
        return <LoginPage></LoginPage>
    }
}