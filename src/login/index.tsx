import { FormEvent } from "react";

const Login: React.FC = () => {

    let userName: string;
    let password: string;

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (userName === "hari" && password === "123") {
            localStorage.setItem("user",
                JSON.stringify(
                    {
                        username: userName,
                        isLogged: true
                    }))
        }
        else {
            localStorage.setItem("user",
                JSON.stringify(
                    {
                        username: userName,
                        isLogged: false
                    }))
        }
    }

    return <form className="m-2" onSubmit={onSubmit}>
        <div className="m-2">
            <input
                type="text"
                placeholder="user id"
                name="name"
                required
                onChange={(e) => { userName = e.target.value }} />
            <span >*</span>
        </div>
        <div className="m-2">
            <input
                type="password"
                placeholder="password"
                name="password"
                required
                onChange={(e) => { password = e.target.value }} />
            <span>*</span>
        </div>
        <div className="m-2">
            <button type="submit" className="btn btn-primary"
            >Login</button>
        </div>
    </form>
}
export default Login;