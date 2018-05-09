import Web3 from 'web3';
//import ganache from 'ganache-cli';

let web3;

var SourceEnum = {
		Metamask: 1,
		Mist: 2,
		Ledger: 3,
		JSONRPC: 4
};
	

class SelectableWeb3 extends Web3 {
	constructor (provider) {
		super(provider);
		this.selectedSigner = SourceEnum.JSONRPC;
	}
	
	isAvailable(source) {
		
		if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
			if ((source === SourceEnum.Metamask) && (web3.currentProvider.isMetaMask)) {
				return true;
			} else if (	(source === SourceEnum.Mist) && (web3.currentProvider.isMist)) {
				return true;
			}
			// In browser, and metamask is running
			//web3 = new Web3(window.web3.currentProvider);
			//	web3 = new Web3(ganache.provider());
			//} else {
			// On server, or not running metamask
			/*	const provider = new Web3.providers.HttpProvider(
			'https://rinkeby.infura.io/LOJvlLskPhnXbG2UbbkO'
		); */
			return false;
		}
	}
}

// For local geth running in --dev mode
const provider = new Web3.providers.HttpProvider(
		'http://localhost:8646'
	);
web3 = new SelectableWeb3(provider);
//}

export default web3;
