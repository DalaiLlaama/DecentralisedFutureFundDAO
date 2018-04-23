import web3 from './web3';
import DFFDAO from '../../build/DFFDAO.json';

const instance = new web3.eth.Contract(
		JSON.parse(DFFDAO.interface),
		'0x3514413619b38fa608716Dc0a7119626922B3634'
);

export default instance;