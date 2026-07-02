import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../assets/r-logo.jpg';

function Navbar(){

    return <>
    <div className={style.navbar}>
        <Link to='/'>
        Home
        </Link>
        <div className={style.right}>
            
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/products'>Products</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    </div>
    </>
}
export default Navbar;