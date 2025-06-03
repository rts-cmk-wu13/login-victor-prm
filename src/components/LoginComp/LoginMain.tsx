import Logo from '../../assets/emojione_bird.svg'
import { Form } from 'react-router'

export default function LoginMain() {
    const defaultInputStyle = "shadow-1 p-4 rounded-[24px]"

    return (
        <div className='flex flex-col gap-24 items-center'>
            <img className="h-[25%]" src={Logo} alt="" />
            <Form className='flex flex-col gap-3 w-full'>
                <label htmlFor="email"></label>
                <input className={`${defaultInputStyle}`} type="email" id="email" placeholder="Email address"/>
                <label htmlFor="passord"></label>
                <input className={`${defaultInputStyle}`} type="password" name="" id="password" placeholder="Password"/>
            </Form>
        </div>
    )
}