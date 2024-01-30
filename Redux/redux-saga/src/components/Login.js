import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch;
    const [user, setUser] = useState({username: "", password: ""});
    const userlogined = useSelector(state => state.userlogined);
    const setValueForUser = (key, value) => {
        const newVal = {...user, [key]: value};
        setUser(newVal);
    };
    const login = () => {
        dispatch({ type: "LOGIN", payload: user });
    };
    useEffect(() => {
        if(userlogined.username){
            navigate("/users");
        }
    }, [userlogined,navigate]);
    return(
        <form>
            <label>Username</label>
            <input type="text" id="username"
                   onChange={e => setValueForUser("username", e.target.value)}/>
            <label>Password</label>
            <input type="text" id="password"
                   onChange={e => setValueForUser("password", e.target.value)}/>
            <button type="button" onClick={() => {login()}}>Login</button>
        </form>
    )
}
export default Login;