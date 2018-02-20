import Web3 from 'web3'; // import Web3 constructor

const web3 = new Web3(window.web3.currentProvider);// this is the provider from Metamask but our version of web3

export default web3;
