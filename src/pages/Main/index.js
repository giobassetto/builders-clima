import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import {
  getCityInformationRequest,
  getCurrentWeatherRequest,
} from '../../store/actions/weather.actions';
import {
  Container,
  RenderCards,
  ContainerInputAndButton,
  Title,
} from './styles';
import Card from '../../components/Card';

export default function Main() {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);
  const [searchCity, setSearchCity] = useState('');

 function getCityInformation() {
    if (searchCity.length < 4) {
      toast.warn('Digite ao menos quatro caracteres para buscar uma cidade!', {
        position: 'top-center',
      });
      return;
    }
    dispatch(getCityInformationRequest(searchCity));
    setSearchCity('');
  }

  function updateWeather() {
    navigator.geolocation.getCurrentPosition(position => {
      dispatch(
        getCurrentWeatherRequest(
          position.coords.latitude,
          position.coords.longitude
        )
      );

      setSearchCity('');
    });
  }

  useEffect(() => {
    updateWeather();
  }, [])
  return (
    <Container>
      <Title>
        <h1>Builders Clima</h1>
      </Title>
      {weather.loadingCurrentCity ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 200,
          }}
        >
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            style={{ fontSize: '200px' }}
          />
        </div>
      ) : (
        <>
          <ContainerInputAndButton>
            <input
              onChange={e => setSearchCity(e.target.value)}
              value={searchCity}
              placeholder="Busque uma cidade"
            />
            <button type="button" onClick={getCityInformation}>
              {weather.loadingCity ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  spin
                  style={{ fontSize: '26px' }}
                />
              ) : (
                <span> Buscar </span>
              )}
            </button>
          </ContainerInputAndButton>
          <RenderCards>
            <Card
              city={weather.currentCity.name}
              temperature={
                weather.currentCity.main ? weather.currentCity.main.temp : 0
              }
              description={
                weather.currentCity.weather
                  ? weather.currentCity.weather[0].description
                  : ''
              }
              main={
                weather.currentCity.weather
                  ? weather.currentCity.weather[0].main
                  : ''
              }
              humidity={
                weather.currentCity.main ? weather.currentCity.main.humidity : 0
              }
              tempMin={
                weather.currentCity.main ? weather.currentCity.main.temp_min : 0
              }
              tempMax={
                weather.currentCity.main ? weather.currentCity.main.temp_max : 0
              }
              pressure={
                weather.currentCity.main ? weather.currentCity.main.pressure : 0
              }
              wind={weather.currentCity.wind}
              updateWeather={updateWeather}
              currentCity
              lastUpdate={weather.currentCity.lastUpdate}
            />
            {weather.cities.map((city, index) => (
              <Card
                key={city.name}
                city={city.name}
                temperature={city.main ? city.main.temp : 0}
                description={city.weather ? city.weather[0].description : ''}
                main={city.weather ? city.weather[0].main : ''}
                humidity={city.main ? city.main.humidity : 0}
                tempMin={city.main ? city.main.temp_min : 0}
                tempMax={city.main ? city.main.temp_max : 0}
                pressure={city.main ? city.main.pressure : 0}
                wind={city.wind}
                updateWeather={updateWeather}
                lastUpdate={city.lastUpdate}
                index={index}
              />
            ))}
          </RenderCards>
        </>
      )}
    </Container>
  );
}
