import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import PopUp from './Popup'; 
import '../styles/Dashboard.scss';
import '../styles/Popup.scss';
import '../styles/Global.scss';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Número de productos por página

  const user = {
    username: 'usuarioDemo',
    createDate: '2024-11-04T12:53:54.707Z',
    name: 'Lulu',
    lastName: 'Prada Sánchez',
    email: 'lulu24@perritos.com',
    userType: 'Cliente'
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername('Usuario');
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post('http://localhost:3001/graphql', {
          query: `
            query {
              products {
                productId
                brand
                productTitle
                items
                images
              }
            }
          `
        });
        setProducts(response.data.data.products);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  // Calcular productos para la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Manejar cambio de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Manejar selección de productos
  const handleSelectProduct = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  // Exportar productos seleccionados a CSV
  const exportToCSV = () => {
    if (selectedProducts.length === 0) {
      alert('Selecciona al menos un producto para exportar.');
      return;
    }

    const csv = Papa.unparse(selectedProducts);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'productos_seleccionados.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-user">
          Bienvenido, <b>{username}</b>
          <button onClick={() => setShowPopup(true)} className="user-info-button">
            Ver Información del Usuario
          </button>
          <button className="user-logout" onClick={() => { window.location.href = './'; }}>Cerrar Sesión</button>
        </div>
        <div className="navbar-logo">
          <img src="/header__logo-offcorss.png" alt="Logo" />
        </div>
      </nav>

      {/* PopUp de información del usuario */}
      {showPopup && <PopUp user={user} onClose={() => setShowPopup(false)} />}

      {/* Vitrina de productos */}
      <div className="products-display">
        <h2>Selecciona algunos de nuestros mejores productos y exportalos a CSV:</h2>
        <div id='export-button'>
          <button onClick={exportToCSV} className="export-button">Exportar Selección a CSV</button>
          </div>
        <div className="products-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <div key={index} className="product-card">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product)}
                  onChange={() => handleSelectProduct(product)}
                />
                <h3>Nombre: {product.productTitle}</h3>
                <p>Marca: {product.brand}</p>
                <p>Id: {product.productId}</p>
                {product.images && (
                  <img src={product.images} alt={product.productTitle} className="product-image" />
                )}
              </div>
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>

        {/* Controles de paginación */}
        <div className="pagination">
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

