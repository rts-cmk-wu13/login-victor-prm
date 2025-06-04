import Logo from '../../assets/emojione_bird.svg'
import { Form } from 'react-router'
import { useAuth } from "../../context/AuthContext";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function LoginMain() {

    const { login } =  useAuth()
    const [error, setError] = useState();
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"
    console.log(location, from)

    const defaultInputStyle = "shadow-1 p-4 rounded-[24px] px-6"

    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Don’t forget this in form handlers
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data)

        // Validér her...

        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const userData = await response.json()
        console.log(userData)

        if (!response.ok) {
            setError(userData.message || userData.error || "Please provide login credentials")
        } else {
            login(userData.accessToken)
            navigate("/secrets", { replace: true })
        }
    }


    return (
        <div className='flex flex-col  items-center'>
            <img className="h-[25%]" src={Logo} alt="" />
            <Form onSubmit={handleLogin} id="loginForm" className='flex flex-col gap-3 w-full mt-auto'>
                <label htmlFor="email"></label>
                <input className={`${defaultInputStyle}`} type="email" name="email" id="email" placeholder="Email address" />
                <label htmlFor="password"></label>
                <input className={`${defaultInputStyle}`} type="password" name="password" id="password" placeholder="Password" />
            </Form>
        </div>
    )
}