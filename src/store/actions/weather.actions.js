export const getCurrentWeatherRequest = (latitude, longitude) => {
  return {
    type: 'GET_CURRENT_WEATHER_REQUEST',
    payload: { latitude, longitude }
  }
}

export const getCurrentWeatherSuccess = (response) => {
  return {
    type: 'GET_CURRENT_WEATHER_SUCCESS',
    payload: response
  }
}

export const getCurrentWeatherFailure = () => {
  return {
    type: 'GET_CURRENT_WEATHER_FAILURE',
  }
}

export const getCityInformationRequest = (city) => {
  return {
    type: 'GET_CITY_INFORMATION_REQUEST',
    payload: { city }
  }
}

export const getCityInformationSuccess = (response) => {
  return {
    type: 'GET_CITY_INFORMATION_SUCCESS',
    payload: response
  }
}

export const getCityInformationFailure = () => {
  return {
    type: 'GET_CITY_INFORMATION_FAILURE',
  }
}

export const removeCityAction = (value) => {
  return {
    type: 'REMOVE_CITY',
    payload: value
  }
}
