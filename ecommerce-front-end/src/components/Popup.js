import React from 'react';

const PopUp = ({ user, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Información del Usuario</h2>
        <ul>
          <li><strong>Username:</strong> {user.username}</li>
          <li><strong>Fecha de Creación:</strong> {new Date(user.createDate).toLocaleDateString()}</li>
          <li><strong>Nombre:</strong> {user.name}</li>
          <li><strong>Apellido:</strong> {user.lastName}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Tipo de Usuario:</strong> {user.userType}</li>
        </ul>
        <button onClick={onClose}>Cerrar</button>
        <button id="editar_info" onClick={() => { onClose(); window.location.href = './User'; }}>Editar</button>
      </div>
    </div>
  );
};

export default PopUp;