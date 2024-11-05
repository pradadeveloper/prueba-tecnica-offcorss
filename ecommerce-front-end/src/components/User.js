import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Register.scss';
import '../styles/Global.scss';

const User = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    contraseña: '',
    validarContraseña: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Obtener los datos del usuario desde el servidor
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/user');
        if (response.status === 200) {
          setFormData(response.data);
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.contraseña !== formData.validarContraseña) {
      setMessage('Contraseña no coincide');
      return;
    }
    try {
      // Enviar solicitud HTTP PUT al servidor para actualizar los datos del usuario
      const response = await axios.put('http://localhost:3001/api/user/update', formData);

      if (response.status === 200) {
        setMessage('Usuario actualizado con éxito');
      } else {
        setMessage('Error al actualizar el usuario');
      }
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      setMessage('Error al actualizar el usuario');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
      <div className="logo-container" style={{ width: '300px', height: '50px', textAlign:'center'}}>
        <img src="/header__logo-offcorss.png" alt="Logo Offcorss" style={{ width: '100%', height: '100%' }} />
      </div>
      <h2>Editar Usuario</h2>
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
            disabled // Desactivar edición del email si es necesario
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
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};



export default User;
