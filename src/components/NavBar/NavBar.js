import logo from '../../funkologo.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div className='navBarMenu'>
            <div><img src={logo} className='logo' alt="logo" /></div>
            <div className='menuButtons'>
                <ul>
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/category/Marvel"}>Marvel</Link></li>
                    <li><Link to={"/category/DC"}>DC</Link></li>
                    <li><a href="#">Otros</a></li>
                    <li><a href="#">Contacto</a></li>
                 </ul>
            </div>
            <div><CartWidget /></div>
        </div>
    )
}

export default NavBar