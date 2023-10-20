import React, { useState } from "react";
import { useAuth } from '../firebase/context';


function Login() {

  const [error, setError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      setError(error.message)
    }

  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center"
    style={{
      background: `url('https://www.laguiadelvaron.com/wp-content/uploads/2016/07/tumblr.com-tumblr_nctjayl4UF1six5o1o1_400.gif')`,
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat'
    }}>
      <>
        <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleLogin}>

          <h2 className="block text-red-500 font-semibold mb-2">Iniciar sesión</h2>

          <label htmlFor="password" className="block text-red-500 font-semibold mb-2">
            Correo Electrónico
          </label>
          <input
            className="border border-red-500 rounded-md px-3 py-2 w-full shadow shadow-red-500"
            type="email"
            onChange={handleChange}
            name="email"
          />

          <label htmlFor="password" className="block text-red-500 font-semibold mb-2">
            Contraseña:
          </label>

          <input
            className="border border-red-500 rounded-md px-3 py-2 w-full shadow shadow-red-500"
            type="password"
            onChange={handleChange}
            name="password"
          />

        <br></br>
        <br></br>

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mx-auto"
          >
            Ingresar 
          </button>

        <br></br>
        <br></br>

        {error && <p className="block text-red-500 font-semibold mb-2" >{error}</p>}

        <br></br>
        <br></br>
      </form>
      </>
    </div>

  );
}

export default Login;