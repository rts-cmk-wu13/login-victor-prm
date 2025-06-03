import Logo from '../../assets/emojione_bird.svg'

export default function LandingPageMain() {
    return (
        <div className='flex flex-col gap-4 items-center'>
            <img className="h-[50%]" src={Logo} alt="" />
            <h1 className='text-6xl font-bold text-primary'>early bird.</h1>
            <p className='font-bold text-gray-600'>Your local discount mate</p>
        </div>
    )
}