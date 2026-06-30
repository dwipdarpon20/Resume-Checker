import { useContext } from "react";
import { AuthContext } from "../context/auth/authContext";
import { login, register ,logout , getMe} from "../services/auth/authServices";
import {toast} from "sonner";
import { useNavigate } from "react-router"

export const useAuth = ()=> {
    const context = useContext(AuthContext);
    const {user , setUser, loading, setLoading} = context;
    const navigate = useNavigate();

    const handleLogin = async ({email, password})=>{
        try {
            setLoading(true);
            const data = await login ({email, password});
            toast.success(data.message);
            setUser (data.user);
            navigate("/");
            setLoading(false);
            
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Something went wrong");
            console.log(error)
        }finally {
            setLoading(false);
        }
    }
    const handleRegister = async ({username, email , password})=>{
        try {
            setLoading(true);
            const data = await register({email, username, password});
            toast.success(data.message);
            navigate("/login");
            setLoading(false);
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Something went wrong");
            console.log(error)
        }finally{
            setLoading(false);
        }
    }
    const handleLogout = async ()=>{
        try {
            setLoading(true);
            const data = await logout();
            navigate("/login");
            toast.success(data.message);
            setUser(null);
            setLoading(false);
        } catch (error) {
            toast.error(error.response?.data?.message|| error.message || "Something went wrong");
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return ({user, loading , handleLogin, handleLogout, handleRegister});
}