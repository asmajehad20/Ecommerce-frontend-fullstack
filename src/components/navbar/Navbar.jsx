import { Link, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';
import useAuthStore from '../../store/useAuthStore';

function Navbar(){

    const navigate = useNavigate();
    const token = useAuthStore( (state)=> state.token);
    const logout = useAuthStore( (state)=> state.logout);
    const handleLogout = ()=>{
        logout();
        navigate('/login');
    }
    return <>
    <div className={style.navbar}>
        <Link to='/'>
        Home
        </Link>
        <div className={style.right}>
            <Link to='/products'>Products</Link>
            {token ? 
            <>
            <Link to='/cart'>Cart</Link>
            <Link to='/login' component="button" onClick={handleLogout}>Logout</Link>
            </> :
            <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </>
            }
            
        </div>
    </div>
    </>
}
export default Navbar;