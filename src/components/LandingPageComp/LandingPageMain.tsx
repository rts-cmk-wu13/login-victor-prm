import Logo from '../../assets/emojione_bird.svg'

export default function LandingPageMain() {
    return (
        <div>
            <img src={Logo} alt="" />
            <h1 className='text-6xl font-bold text-primary'>early bird.</h1>
        </div>
    )
}