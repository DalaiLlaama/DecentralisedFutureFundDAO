import Providers, { SourceEnum } from '../ethereum/providers';

export const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS';
function requestAccounts(providers) {
	return {
		type: REQUEST_ACCOUNTS,
		providers
	}
}

export const ACCOUNTS_RECEIVED = 'SET_ACCOUNTS';
function accountsReceived(accounts) {
	return {
		type: ACCOUNTS_RECEIVED,
		text: accounts
	}
}

export function getAccounts(signer) {
	
	return function (dispatch) {
		dispatch(requestAccounts(signer));
		
		var providers = new Providers(signer);
		console.log('getAccounts() ', signer); 
		var w3 = providers.getWallet();
		//console.log('got wallet:', typeof w3.eth);
		var accounts;
		if (typeof w3 !== 'undefined') {
			return w3.eth.getAccounts()
				.then(
				     (response, error) => {
				    	if (error) {
				    		console.log('error in getAccounts()');
				    		return;
				    	}
					    console.log('get accounts resolved', response);
					    return response;
				 })
				 .then((accounts) =>
					dispatch(accountsReceived(accounts))
				 );
	    }
	}
}
