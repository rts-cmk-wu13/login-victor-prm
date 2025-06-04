import Logo from '../../assets/emojione_bird.svg'
import { Form } from 'react-router'

export default function SignupMain() {
    const defaultInputStyle = "shadow-1 p-4 rounded-[24px] px-6"

    return (
        <div className='flex flex-col items-center'>
            <img className="h-[25%]" src={Logo} alt="" />
            <Form className='flex flex-col gap-3 w-full mt-auto'>
                <label htmlFor="email"></label>
                <input className={`${defaultInputStyle}`} type="email" id="email" placeholder="Email address" />
                <label htmlFor="username"></label>
                <input className={`${defaultInputStyle}`} type="text" id="username" placeholder="Username" />
                <label htmlFor="password"></label>
                <input className={`${defaultInputStyle}`} type="password" name="" id="password" placeholder="Password" />
                <label htmlFor="passwordConfirm"></label>
                <input className={`${defaultInputStyle}`} type="password" name="" id="passwordConfirm" placeholder="Confirm Password" />
            </Form>
        </div>
    )
}