const axios = require('axios');

// Función para obtener productos de la API de VTEX
const getProductsFromVTEX = async () => {
    try {
      const response = await axios.get('https://offcorss.myvtex.com/api/catalog_system/pub/products/search');
      return response.data; 
    } catch (error) {
      console.error('Error al obtener productos de VTEX:', error);
      throw new Error('No se pudo obtener los productos');
    }
  };
  
  module.exports = { getProductsFromVTEX };