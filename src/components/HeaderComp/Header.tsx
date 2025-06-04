import { Link, useNavigate } from "react-router";
import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";
import type { HeaderProps } from "../../types/types";
import { useAuth } from "../../context/AuthContext";

export default function Header({ title }: HeaderProps) {
    const { token, logout } = useAuth();
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate("/")
    }

    const headerButtonClass = "shadow-1 font-bold text-xl text-center p-4 rounded-[18px] w-min inline-flex align-center justify-center gap-2 text-white bg-primary";


    return (
        <nav className="flex flex-col gap-4">
            {
                !token ?
                    (<Link className={`${headerButtonClass}`} to="/"><ArrowLongLeftIcon className="size-4 h-auto"></ArrowLongLeftIcon></Link>) :
                    (<button onClick={handleLogout} className={`${headerButtonClass} ml-auto`}>Logout</button>)
            }
            <h1 className="text-3xl font-bold text-primary text-center">{title}</h1>
        </nav>
    )
}