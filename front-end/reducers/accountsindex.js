import Providers, { SourceEnum } from '../ethereum/providers';
//import storeFactory from '../configureStore';

//const { store } = storeFactory();

/*
 * Return all accounts associated with the current provider
 */
const getAccounts = async (prov) => {
	var providers = new Providers(prov);
	console.log('getAccounts() ', prov); 
	var w3 = providers.getWallet();
	//console.log('got wallet:', typeof w3.eth);
	var accounts;
	if (typeof w3 !== 'undefined') {
		accounts = await w3.eth.getAccounts();
		  /*(.then(
		     (resolved, error) => {
		    	if (error) {
		    		console.log('error in getAccounts()');
		    		return [];
		    	}
			    console.log('get accounts resolved', resolved);
			    props.setAccounts({ type: 'SET_ACCOUNTS', text: resolved });
			    //return resolved;
		    }); */
    }
	return accounts;
}

const initialState = {
	loading: false, 
	accounts: []
};

export default function accountsindex(state = initialState, action) {
	switch (action.type) {
	  case 'IS_LOADING':
		return Object.assign({}, state, {loading: true});
	  case 'LOADED':
		return Object.assign({}, state, {loading: false});
	  case 'SET_ACCOUNTS':
		return Object.assign({}, state, {accounts: action.text, loading: false});
	  case 'SET_SIGNER':
		console.log('accountsindex SET_SIGNER');
		//getAccounts(action.text);
		//console.log('accounts ', accounts);
		return Object.assign({}, state, {accounts: [], loading: true});
	  default:
		return state
	}
}