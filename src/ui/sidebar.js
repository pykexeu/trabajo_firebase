import { NavLink } from 'react-router-dom';
import logo from '../logo.png'

const Nav = () => {
    return (
        <nav className="bg-gray-800 md:w-2/6 xl:w-1/5 bg min-h-screen fixed">
            <div>
                <img src={logo} alt="Imagen"></img>
                <div className="p-6">
                    <NavLink end to="/" className="uppercase text-white text-2xl tracking-wide text-center font-bold" aria-current="page">Home</NavLink>
                    <NavLink end to="/register-user" className="p-1 text-gray-400 block hover:bg-red-500 hover:text-gray-900">Registrar usuario</NavLink>
                    <NavLink end to="/login" className="p-1 text-gray-400 block hover:bg-red-500 hover:text-gray-900">Iniciar Sesión</NavLink>
                    <NavLink end to="/register-training" className="p-1 text-gray-400 block hover:bg-red-500 hover:text-gray-900">Registrar Entrenamiento</NavLink>
                    <NavLink end to="/trainings" className="p-1 text-gray-400 block hover:bg-red-500 hover:text-gray-900">Entrenamientos</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

