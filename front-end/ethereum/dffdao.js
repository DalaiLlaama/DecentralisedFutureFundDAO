import web3 from '../web3';
import DFFDAO from './build/DFFDAO.json';

export default (address) => {
	return new web3.eth.Contract(
		JSON.parse(DecentralisedFutureFundDAO.interface),
		address
	);
};