import { GET_COUNTRIES } from '../actions/types';
import { formModels } from '../utils/form-models';

const initialState = {
  categories: formModels,
  countries: [],
};

export const countries = (state = initialState, action) => {
  switch(action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      };

    default:
      return state;
  }
};
