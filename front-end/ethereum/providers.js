import web3 from 'web3';
import ProviderEngine from 'web3-provider-engine';
import RpcSubprovider from 'web3-provider-engine/subproviders/rpc.js';
import Transport from "@ledgerhq/hw-transport-node-hid";
import AppEth from "@ledgerhq/hw-app-eth";
//import ganache from 'ganache-cli';


export const SourceEnum = {
		METAMASK: "MetaMask",
		MIST: "Mist",
		LEDGER: "Ledger",
		JSONRPC: "RPC"
};
	

export class Providers {
	
	constructor (signer) {
		this.selectedSigner = signer;
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
	
	selectProvider(newProvider) {
		console.log('switch to ', newProvider, ' from ', web3.currentProvider, web3.givenProvider);
		this.selectedSigner = newProvider;
		switch (newProvider) {
		  case SourceEnum.METAMASK: 
			// Switch to metamask
			if (this.selectedSigner !== SourceEnum.METAMASK && web3.givenProvider.isMetaMask) {
				console.log('isMetaMask ', web3.givenProvider);
				web3.setProvider(web3.givenProvider);
				//window.web3 = new Web3(web3.givenProvider);
			}
			break;
		  case SourceEnum.MIST:
			break;
		  case SourceEnum.LEDGER:
			break;
		  case SourceEnum.JSONRPC:
			console.log('switching to JSONRPC');
			let engine = new ProviderEngine();
			const provider = new RpcSubprovider(
					{ rpcUrl: 'http://localhost:8646', }
				);
			engine.addProvider(provider);
			engine.start();
			console.log('in JSONRPC ', window.web3.version);
			//web3.reset();
			window.web3.setProvider(engine);
			console.log('switched to RPC: ', window.web3.currentProvider);
			break;
		  default:
			console.log('Unrecognised provider');
		};
	}
	
	ledgerSigner {
		const getEthAddress = async () => {
		  const transport = await Transport.create();
		  const eth = new AppEth(transport);
		  const result = await eth.getWalletPublicKey("44'/0'/0'/0/0");
		  return result.ethernetAddress;
		};
		getEthAddress().then(a => console.log(a));
	}
}

//const providers = new Providers();
export default Providers;

