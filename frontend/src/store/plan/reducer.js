import {
  GET_PLANS,GET_PLANS_SUCCESS,
  GET_FEATURES,GET_FEATURES_SUCCESS,
  API_ERROR } from './actionTypes';

const initialState = {
    error: "",
    plans: [],
    plan: null,
    
    features: [],
    feature: null,
    loading: false
}

const plan = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLANS:
          state = { ...state ,loading:true};
          break;            
        case GET_PLANS_SUCCESS:
          state = { ...state ,loading:false, plans: action.payload.plans};
          break;
        case GET_FEATURES:
          state = { ...state  ,loading:true};
          break;            
        case GET_FEATURES_SUCCESS:
          state = { ...state ,loading:false ,features: action.payload.features};
          break;
        case API_ERROR:
            state = { ...state, error: action.payload, loading: false };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default plan;