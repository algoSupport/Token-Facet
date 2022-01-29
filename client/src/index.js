import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {ethers} from 'ethers'


import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/zephyr/bootstrap.min.css"

import {Web3ReactProvider} from '@web3-react/core'

function getLibrary(provider){
  return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js

}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>,
  document.getElementById('root')
);
