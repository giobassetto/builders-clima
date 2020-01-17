const INITIAL_STATE = {
  cities: [],
  currentCity: {},
  loadingCity: false,
  loadingCurrentCity: true,
}

export default function weatherReducer(state = INITIAL_STATE, action = null) {
  switch(action.type) {
    case 'GET_CURRENT_WEATHER_REQUEST':
      return {...state, loadingCurrentCity: true };
    case 'GET_CURRENT_WEATHER_SUCCESS':
      return { ...state, currentCity: action.payload, loadingCurrentCity: false };
    case 'GET_CURRENT_WEATHER_FAILURE':
      return { ...state, loadingCity: false };
    case 'GET_CITY_INFORMATION_REQUEST':
      return { ...state, loadingCity: true};
    case 'GET_CITY_INFORMATION_SUCCESS':
      return { ...state, cities: [...state.cities, action.payload], loadingCity: false };
    case 'GET_CITY_INFORMATION_FAILURE':
      return { ...state, loadingCity: false };
    case 'REMOVE_CITY':
      return {...state, cities: action.payload}
    default:
      return state;
  }
}
