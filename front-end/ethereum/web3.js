import Web3 from 'web3';
import ProviderEngine from 'web3-provider-engine';
import RpcSubprovider from 'web3-provider-engine/subproviders/rpc.js';
//import SourceEnum from './providers';
//import ganache from 'ganache-cli';

//console.log(Web3);

// For local geth running in --dev mode
//let web3 = new Web3(engine);
//}
const SourceEnum = {
		METAMASK: "MetaMask",
		MIST: "Mist",
		LEDGER: "Ledger",
		JSONRPC: "RPC"
};

export let wallets = {};
// Get injected web3 provider if it's there.
if (typeof window !== 'undefined' && window.web3.currentProvider !== 'undefined') {
	var w = new Web3(window.web3.currentProvider);
	if (w.isMetaMask) {
	    wallets[SourceEnum.METAMASK] = w;
	} else if (w.isMist) {
		wallets[SourceEnum.MIST] = w;
	}
} 

//Set up ledger connection ??? Is this the right place?
//TODO - move code here from providers
wallets[SourceEnum.LEDGER] = null;

// Set up RPC connection
let engine = new ProviderEngine();
const provider = new RpcSubprovider(
		{ rpcUrl: 'http://localhost:8646', }
	);
engine.addProvider(provider);
engine.start();
wallets[SourceEnum.JSONRPC] = new Web3(engine);


// Default provider is RPC
let web3 = wallets[SourceEnum.JSONRPC];

console.log('init web3 @', typeof web3);
//console.log('wallets', wallets);
export default web3;
