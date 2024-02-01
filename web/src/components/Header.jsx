import Logo from '../assets/images/logo.svg'
function Header() {
    return (
        <div className='flex justify-center items-center'>
            <img src={Logo} alt='logo' />
        </div>
    )
}

export default Header