import React, { useState } from 'react';
import '../styles/Global.scss';
import '../styles/Login.scss';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/api/login', {
//         username,
//         password,
//       });
      
//       // Si la autenticación es exitosa, guarda el username en localStorage
//       if (response.status === 200) {
//         localStorage.setItem('username', username);
//         window.location.href = '/dashboard'; // Redirige al Dashboard o a la ruta deseada
//       } else {
//         setError('Usuario o contraseña incorrectos');
//       }
//     } catch (error) {
//       console.error('Error al iniciar sesión:', error);
//       setError('Usuario o contraseña incorrectos');
//     }
//   };
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Credenciales hardcodeadas
  const hardcodedUsername = 'usuarioDemo';
  const hardcodedPassword = 'luluperrito';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación de credenciales hardcodeadas
    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Si las credenciales son correctas, guarda el username en localStorage
      localStorage.setItem('username', username);
      window.location.href = '/dashboard'; 
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <div className='saludo'>
            <div className="logo-container" style={{ width: '300px', height: '50px' }}>  
              <img src="/header__logo-offcorss.png" alt="Logo Offcorss" style={{ width: '100%', height: '100%' }} />
            </div>
            <h2>Bienvenid@s,</h2>
            <h3>Vamos a iniciar sesión:</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password" 
          />
        </div>
        <button type="submit">Iniciar sesión</button>
        <a href='./Register'>Registrate</a>
      </form>
    </div>
  );
};

export default Login;
