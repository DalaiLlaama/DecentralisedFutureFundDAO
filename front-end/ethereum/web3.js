import Web3 from 'web3';
import ProviderEngine from 'web3-provider-engine';
import RpcSubprovider from 'web3-provider-engine/subproviders/rpc.js';
//import ganache from 'ganache-cli';

//console.log(Web3);

// For local geth running in --dev mode
//let web3 = new Web3(engine);
//}
let web3;
if (typeof window !== 'undefined' && window.web3.currentProvider !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
	let engine = new ProviderEngine();
	const provider = new RpcSubprovider(
			{ rpcUrl: 'http://localhost:8646', }
		);
	engine.addProvider(provider);
	engine.start();
    web3 = new Web3(engine);
}
console.log('init web3 @', web3);
export default web3;
