import React, { useState } from 'react';
import { useAuth} from '../firebase/context';

function Register() {

    const [error, setError] = useState('');
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        user: '',
        email: '',
        password: ''
    })

    const { signup } = useAuth();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        try {
        await signup(user.email, user.password);
        alert("El usuario se ha registrado correctamente.");
        } catch (error) {
            setError(error.message)
        }
    };

    return (
        <>
            <div className="bg-white min-h-screen flex justify-center items-center"
            style={{
                background: `url('https://media.vogue.mx/photos/5c0710b2a21a2881502ef874/master/w_1600%2Cc_limit/ejercicio_4290.gif')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleRegister}>
               
                    <label htmlFor='name' className="block text-red-500 font-semibold mb-2 " >Nombre completo</label>
                    <input 
                    type='text' 
                    name='name' 
                    className="border border-red-500 rounded-md px-3 py-2 w-full shadow shadow-red-500"
                    onChange={handleChange}>
                    </input>

                    <label htmlFor='user' className="block text-red-500 font-semibold mb-2" >Nombre de Usuario</label>
                    <input 
                    type='text' 
                    name='user' 
                    className="border border-red-500 rounded-md px-3 py-2 w-full shadow shadow-red-500"
                    onChange={handleChange}>
                    </input>

                    <label htmlFor='email' className="block text-red-500 font-semibold mb-2" >Correo Electrónico</label>
                    <input 
                    type='email' 
                    name='email' 
                    className="border border-red-500 rounded-md px-3 py-2 w-full shadow shadow-red-500"
                    onChange={handleChange}>
                    </input>

                    <label htmlFor='password' className="block text-red-500 font-semibold mb-2" >Contraseña</label>
                    <input 
                    type='password' 
                    name='password' 
                    className="border border-red-500 rounded-md px-3 py-2 w-full shadow shadow-red-500"
                    onChange={handleChange}>
                    </input>

                    <br></br>
                    <br></br>

                <button 
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mx-auto">Registrarse</button>

                <br></br>
                <br></br>

                    {error && <p className="block text-red-500 font-semibold mb-2" >{error}</p>}
                </form>
            </div>
        </>

    );
}

export default Register;