import shopData from '../Shop/shopData'

export const initialState = {
  filteredProducts: shopData,
  selectedPriceRange: [0, Infinity],
  selectedBrand: '',
  selectedColor: '',
  selectedSize: ''
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_BY_PRICE':
      return { ...state, selectedPriceRange: action.payload };
    case 'FILTER_BY_BRAND':
      return { ...state, selectedBrand: action.payload };
    case 'FILTER_BY_COLOR':
      return { ...state, selectedColor: action.payload };
    case 'FILTER_BY_SIZE':
      return { ...state, selectedSize: action.payload };
    case 'APPLY_FILTERS':
      const filtered = shopData.filter(product => {
        const priceMatch = product.price >= state.selectedPriceRange[0] && product.price <= state.selectedPriceRange[1];
        const brandMatch = state.selectedBrand ? product.brand === state.selectedBrand : true;
        const colorMatch = state.selectedColor ? product.colors.includes(state.selectedColor) : true;
        const sizeMatch = state.selectedSize ? product.sizes.includes(state.selectedSize) : true;
        return priceMatch && brandMatch && colorMatch && sizeMatch;
      });
      return { ...state, filteredProducts: filtered };
    default:
      return state;
  }
};
