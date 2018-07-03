import Web3 from 'web3';
import ProviderEngine from 'web3-provider-engine';
import RpcSubprovider from 'web3-provider-engine/subproviders/rpc.js';
//import ganache from 'ganache-cli';

//console.log(Web3);

// For local geth running in --dev mode
let engine = new ProviderEngine();
const provider = new RpcSubprovider(
		{ rpcUrl: 'http://localhost:8646', }
	);
engine.addProvider(provider);
engine.start();
let web3 = new Web3(engine);
//}

export default web3;
