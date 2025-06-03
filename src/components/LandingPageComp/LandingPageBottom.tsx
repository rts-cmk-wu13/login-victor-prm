import { Link } from "react-router"
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function LandingPageBottom() {
    const baseButtonClass = "shadow-1 font-bold text-xl text-center p-4 rounded-[24px] w-full inline-flex align-center justify-center gap-2";

    return (
        <div className="flex flex-col gap-2">
            <Link className={`${baseButtonClass} text-white bg-primary`} to="/signup">Sign up</Link>
            <Link className={`${baseButtonClass} text-primary`} to="/login">Login <ArrowLongRightIcon className="size-5 h-auto"/></Link>
        </div>
    )
}