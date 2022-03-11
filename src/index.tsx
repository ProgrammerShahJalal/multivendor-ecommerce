import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "swiper/css/bundle";
import "@lottiefiles/lottie-player";
<<<<<<< HEAD
import { HelmetProvider } from "react-helmet-async";
import LangState from './components/Pages/MultiLanguage/languagecontext/lang';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <LangState>
        <App />
      </LangState>
    </HelmetProvider>
=======
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> 1d01f03323faf7b2e3635053e97819012aebcfa5
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
