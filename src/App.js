import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';
import GlobalStyle from './styles/globalStyles';
import Main from './pages/Main';
import 'react-toastify/dist/ReactToastify.css';
import 'dotenv/config';

export default function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <GlobalStyle />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}
