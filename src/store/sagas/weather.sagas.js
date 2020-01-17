import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import moment from 'moment';
import api from '../../config/api';

function* getCurrentWeather(action) {
  try {
     const response = yield call(api.get, `weather?lat=${action.payload.latitude}&lon=${action.payload.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=pt&units=metric`);
     yield put({type: 'GET_CURRENT_WEATHER_SUCCESS', payload: { ...response.data, lastUpdate: moment().format('DD/MM/YYYY HH:mm:ss') } });
  } catch (e) {
     yield put({type: 'GET_CURRENT_WEATHER_FAILURE' });
     toast.error(
      'Ocorreu um erro, verifique sua conexão e recarregue a página!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

function* getCityInformation(action) {
  try {
    const response = yield call(api.get, `weather?q=${action.payload.city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=pt&units=metric`);

    yield put({type: 'GET_CITY_INFORMATION_SUCCESS', payload: { ...response.data, lastUpdate: moment().format('DD/MM/YYYY HH:mm:ss') }});

    toast.success('Cidade adicionado com sucesso!', { position: toast.POSITION.TOP_CENTER });
  } catch(err) {
    yield put({type: 'GET_CITY_INFORMATION_FAILURE'});

    toast.error(
      'Cidade não encontrada, verifique se você digitou o nome corretamente!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export default all([
  takeLatest('GET_CURRENT_WEATHER_REQUEST', getCurrentWeather),
  takeLatest('GET_CITY_INFORMATION_REQUEST', getCityInformation)
]);
