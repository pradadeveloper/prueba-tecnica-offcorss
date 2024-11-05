const { getProductsFromVTEX } = require('./productService');

const resolvers = {
  Query: {
    products: async () => {
      try {
        const products = await getProductsFromVTEX();
        return products.map(product => ({
          productId: product.productId,
          brand: product.brand,
          productTitle: product.productName,
          items: product.items.map(item => item.itemId),
          images: product.items[0]?.images[0]?.imageUrl || ''
        }));
      } catch (error) {
        throw new Error('Error al obtener la lista de productos');
      }
    }
  }
};

module.exports = resolvers;