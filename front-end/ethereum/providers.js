import web3 from 'web3';
import ProviderEngine from 'web3-provider-engine';
import RpcSubprovider from 'web3-provider-engine/subproviders/rpc.js';
//import ganache from 'ganache-cli';


export const SourceEnum = {
		METAMASK: "MetaMask",
		MIST: "Mist",
		LEDGER: "Ledger",
		JSONRPC: "RPC"
};
	

export class Providers {
	
	constructor () {
		this.selectedSigner = SourceEnum.JSONRPC;
	}

	/*
	 * Returns true if the source is detected in the current environment
	 */
	isAvailable(source) {
		if (SourceEnum[source] === SourceEnum.JSONRPC) {
			// Assume that a RPC connection can at least be attempted
			return true;
		};
		if (typeof window !== 'undefined' && typeof web3.givenProvider !== 'undefined') {
			if ((SourceEnum[source] === SourceEnum.METAMASK) && (web3.givenProvider.isMetaMask)) {
				return true;
			} else if ((SourceEnum[source] === SourceEnum.MIST) && (web3.givenProvider.isMist)) {
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
		} else {
			console.log('window or currentProvider undefined', typeof window == 'undefined', web3.currentProvider);
			return false;
		}
			
	}
	
	/*
	 * Return an array of all source names, each with a flag indicating whether it is available.
	 */
	sources() {
		console.log('Providers:', web3.givenProvider);
		let sourceArr = [];
		for (let s in SourceEnum) {
			let source = {source: s, text: SourceEnum[s], available:this.isAvailable(s), selected: SourceEnum[s]===this.selectedSigner};
			sourceArr.push(source);
		}
		console.log(sourceArr);
		return sourceArr;
	}
}

// For local geth running in --dev mode
const provider = new RpcSubprovider(
		{ rpcUrl: 'http://localhost:8646', }
	);
//}

export default provider;
