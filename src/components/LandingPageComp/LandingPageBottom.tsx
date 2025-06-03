import { Link } from "react-router"

export default function LandingPageBottom() {
    const baseButtonClass = "shadow-1 font-bold text-xl text-center p-4 rounded-[24px] w-full ";

    return (
        <div className="flex flex-col gap-2">
            <Link className={`${baseButtonClass} text-white bg-primary`} to="/signup">Sign up</Link>
            <Link className={`${baseButtonClass} text-primary`} to="/login">Log in</Link>
        </div>
    )
}