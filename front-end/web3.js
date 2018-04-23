import Web3 from 'web3';
import ganache from 'ganache-cli';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// In browser, and metamask is running
	//web3 = new Web3(window.web3.currentProvider);
	web3 = new Web3(ganache.provider());
} else {
	// On server, or not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/LOJvlLskPhnXbG2UbbkO'
	);
	web3 = new Web3(provider);
}

export default web3;
