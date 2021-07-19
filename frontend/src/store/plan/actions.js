import {  
  GET_PLANS,GET_PLANS_SUCCESS,
  GET_FEATURES,GET_FEATURES_SUCCESS,
  API_ERROR } from './actionTypes';

export const getPlans = () => {
    return {
        type: GET_PLANS,
        payload: {  }
    }
}

export const getPlansSuccess = (payload) => {
    return {
        type: GET_PLANS_SUCCESS,
        payload: payload
    }
}

export const getFeatures = () => {
  return {
      type: GET_FEATURES,
      payload: {  }
  }
}

export const getFeaturesSuccess = (payload) => {
  return {
      type: GET_FEATURES_SUCCESS,
      payload: payload
  }
}

export const apiError = (error) => {
    return {
        type: API_ERROR,
        payload: error
    }
}
