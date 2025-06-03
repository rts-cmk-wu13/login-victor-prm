import { Link } from "react-router";
import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";

type HeaderProps = {
    title: string
};


export default function Header({ title }: HeaderProps) {
    const backButtonClass = "shadow-1 font-bold text-xl text-center p-4 rounded-[18px] w-min inline-flex align-center justify-center gap-2 text-white bg-primary";


    return (
        <nav className="flex flex-col gap-4">
            <Link className={`${backButtonClass}`} to="/"><ArrowLongLeftIcon className="size-4 h-auto"></ArrowLongLeftIcon></Link>
            <h1 className="text-3xl font-bold text-primary text-center">{title}</h1>
        </nav>
    )
}