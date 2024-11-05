import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.scss';
import '../styles/Global.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    contraseña: '',
    validarContraseña: '',
  });
  const [message, setMessage] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar si las contraseñas coinciden en tiempo real
    if (name === 'contraseña' || name === 'validarContraseña') {
      setPasswordMatch(
        name === 'contraseña'
          ? value === formData.validarContraseña
          : formData.contraseña === value
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordMatch) {
      setMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      // Enviar solicitud HTTP POST al servidor
      const response = await axios.post('http://localhost:3001/api/register', formData);

      if (response.status === 201) {
        setMessage('Usuario registrado con éxito');
      } else {
        setMessage('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      setMessage('Error al registrar el usuario');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
      <div className="logo-container" style={{ width: '300px', height: '50px' }}>
        <img src="/header__logo-offcorss.png" alt="Logo Offcorss" style={{ width: '100%', height: '100%' }} />
      </div>
      <h2>Registrarse</h2>
      {message && <p>{message}</p>}
      
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Validar Contraseña:</label>
          <input
            type="password"
            name="validarContraseña"
            value={formData.validarContraseña}
            onChange={handleChange}
            required
          />
        </div>
        {!passwordMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}
        <button type="submit">Registrarse</button>
        <a href='./'>Logearse</a>
      </form>
    </div>
  );
};

export default Register;
