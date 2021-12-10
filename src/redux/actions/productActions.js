import { ActionTypes } from '../constants/action-types';
import storeApi from '../../apis/storeApi';

export const fetchProducts = () => async (dispatch) => {
  const response = await storeApi.get('/products');
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (productId) => async (dispatch) => {
  const product = await storeApi.get(`/products/${productId}`);
  dispatch({
    type: ActionTypes.FETCH_PRODUCT,
    payload: product.data,
  });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
