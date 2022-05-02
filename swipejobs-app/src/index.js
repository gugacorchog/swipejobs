import React from 'react';
import ReactDOM from 'react-dom';
import { types, transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// options to customise the alert showed when the Jobbutton is clicked
const options = {
  position: positions.MIDDLE,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
  type: types.SUCCESS
}
// this enables the alert to be used on the Jobbutton
const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

