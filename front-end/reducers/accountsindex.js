import Providers, { SourceEnum } from '../ethereum/providers';
//import storeFactory from '../configureStore';

//const { store } = storeFactory();

/*
 * Return all accounts associated with the current provider
 */
const getAccounts = (providers) => {
	console.log('getAccounts() ', providers); 
	//var providers = new Providers(this.state.providers.selectedSigner);
	var w3 = providers.getWallet();
	console.log('got wallet:', typeof w3.eth);
	var accounts;
	if (typeof w3 !== 'undefined') {
		accounts = w3.eth.getAccounts()
		  .then(
		     (resolved, error) => {
		    	if (error) {
		    		console.log('error in getAccounts()');
		    		return [];
		    	}
			    console.log('get accounts resolved', resolved);
			    //store.dispatch({ type: 'SET_ACCOUNTS', text: resolved });
			    return resolved;
		    });
    }
	return [];
}

const initialState = {
	loading: false, 
	accounts: getAccounts(new Providers(SourceEnum.JSONRPC))
};

export default function accountsindex(state = initialState, action) {
	switch (action.type) {
	  case 'IS_LOADING':
		return Object.assign({}, state, true);
	  case 'LOADED':
		return Object.assign({}, state, false);
	  case 'SET_ACCOUNTS':
		return Object.assign({}, state, [action.text]);
	  default:
		return state
	}
}