import logo from '../funkologo.png'
const NavBar = () => {
    return (
        <div className='navBarMenu'>
            <div><img src={logo} className='logo' alt="logo" /></div>
            <div className='menuButtons'>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Marvel</a></li>
                    <li><a href="#">DC</a></li>
                    <li><a href="#">Otros</a></li>
                    <li><a href="#">Contacto</a></li>
                 </ul>
            </div>
            <div></div>
        </div>
    )
}

export default NavBar