import logo from '../../funkologo.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div className='navBarMenu'>
            <div><Link to={"/"}><img src={logo} className='logo' alt="logo" /></Link></div>
            <div className='menuButtons'>
                <ul>
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/category/Marvel"}>Marvel</Link></li>
                    <li><Link to={"/category/DC"}>DC</Link></li>
                    <li><Link to={"/category/Otros"}>Otros</Link></li>
                    <li><a href="#">Contacto</a></li>
                 </ul>
            </div>
            <div><CartWidget /></div>
        </div>
    )
}

export default NavBar