import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  faTemperatureHigh,
  faTemperatureLow,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { getCityInformationRequest, removeCityAction } from '../../store/actions/weather.actions';
import {
  Container,
  ContainerRow,
  TextImage,
  ButtonUpdate,
  ContainerButtons,
  ButtonRemove,
} from './styles';

import imageNublado from '../../assets/nublado.png';
import imageSol from '../../assets/sol.jpg';
import imageChuva from '../../assets/chuva.png';

export default function Card({
  city,
  temperature,
  description,
  main,
  humidity,
  tempMin,
  tempMax,
  pressure,
  wind,
  updateWeather,
  currentCity,
  lastUpdate,
  index
}) {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.weather.cities);

  function removeCity() {
    let copyCities = cities;
    if(index === 0) {
      copyCities = [];
    } else {
      copyCities = copyCities.slice(index, 1);
    }
    dispatch(removeCityAction(copyCities));
  }

  function updateCity() {
    removeCity();
    dispatch(getCityInformationRequest(city));
  }

  return (
    <Container>
      <h5> Tempo agora em </h5>
      <h3>{city}</h3>
      <ContainerRow>
        {main === 'Clouds' ? (
          <img src={imageNublado} alt="description" />
        ) : main === 'Clear' ? (
          <img src={imageSol} alt="description" />
        ) : (
          <img src={imageChuva} alt="description" />
        )}
        <TextImage>
          <h1>
            {' '}
            <FontAwesomeIcon
              icon={temperature < 20 ? faTemperatureLow : faTemperatureHigh}
            />
            &nbsp;
            {temperature}
          </h1>
          <h3>{description}</h3>
        </TextImage>
      </ContainerRow>
      <ContainerRow>
        <TextImage>
          <h2>Umidade</h2>
          <h6 style={{ marginLeft: '40px' }}>{humidity}%</h6>
        </TextImage>
        <TextImage>
          <h2>Pressão</h2>
          <h6 style={{ marginLeft: '10px' }}>{pressure} hPa</h6>
        </TextImage>
        <TextImage>
          <h2>
            Temperatura Máxima &nbsp;{' '}
            <FontAwesomeIcon icon={faArrowUp} color="#D21D1E" />
          </h2>
          <h6 style={{ marginLeft: '95px' }}>{tempMax}</h6>
        </TextImage>
        <TextImage>
          <h2>
            Temperatura Mínima &nbsp;
            <FontAwesomeIcon icon={faArrowDown} color="#429cd7" />
          </h2>
          <h6 style={{ marginLeft: '95px' }}>{tempMin}</h6>
        </TextImage>
        <TextImage>
          <h2>Vento</h2>
          <h6>{wind ? wind.speed : ''} Km/h</h6>
        </TextImage>
      </ContainerRow>
      <ContainerButtons>
        { currentCity ? (
              <ButtonUpdate onClick={updateWeather}>Atualizar Dados</ButtonUpdate>
          ) :
          (
            <>
              <ButtonUpdate onClick={updateCity}>Atualizar Dados</ButtonUpdate>
              <ButtonRemove onClick={removeCity}> Remover Cidade </ButtonRemove>
            </>
          )
        }
      </ContainerButtons>
       <p>Ultima atualização: {lastUpdate}</p>
    </Container>
  );
}

Card.propTypes = {
  city: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string,
  main: PropTypes.string,
  humidity: PropTypes.number,
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  pressure: PropTypes.number,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    deg: PropTypes.number,
  }),
  updateWeather: PropTypes.func,
  currentCity: PropTypes.bool,
  lastUpdate: PropTypes.string,
  index: PropTypes.number,
};
