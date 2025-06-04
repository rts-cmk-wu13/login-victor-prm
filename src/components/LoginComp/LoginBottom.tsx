import { Link } from "react-router"
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function LoginBottom() {
    const baseButtonClass = "shadow-1 font-bold text-xl text-center p-4 rounded-[24px] w-full inline-flex align-center justify-center gap-2";

    return (
        <div className="flex flex-col gap-2">
            <button className={`${baseButtonClass} text-white bg-primary`}  form="loginForm" >Login <ArrowLongRightIcon className="size-5 h-auto"/></button>
            <p className="text-center">Not a user yet? <Link className="text-primary" to="/signup">Sign up</Link></p>
        </div>
    )
}