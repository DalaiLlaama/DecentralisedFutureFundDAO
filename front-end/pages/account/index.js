import React, { Component } from 'react';

import { Input, Menu, Icon, Label, List } from 'semantic-ui-react';
//import dffdao from '../../ethereum/dffdao';
import { Link } from '../../routes';
//import web3 from '../../ethereum/web3';
import Providers, { SourceEnum } from '../../ethereum/providers';
import { Provider, connect } from 'react-redux';

import storeFactory from '../../configureStore';
import Layout from '../../components/Layout';
import Sources from '../../components/Sources';
import Accounts from '../../components/Accounts';
import { getAccounts } from '../../actions/actions';

const { store, persistor } = storeFactory();

//import Members from '../../ethereum/Members';

const mapStateToProps = (state) => {

	console.log('state.selectedSigner', state.provider.selectedSigner);
	return { 
			 selectedSigner: state.provider.selectedSigner,
			 accounts: state.accounts.accounts
		};
};

const mapDispatchersToProps = (dispatch) => {
	return {
		onSignerClick: (prov) => {
			console.log('onSignerClick:', prov);
			dispatch({
				type: 'SET_SIGNER',
				text: prov
			});
			dispatch(getAccounts(prov));
		},
		setAccounts: (acc) => {
			dispatch({
				type: 'SET_ACCOUNTS',
				text: acc
			})
		}
	}
}

const ConnectedSources = connect(mapStateToProps, mapDispatchersToProps)(Sources);
const ConnectedAccounts = connect(mapStateToProps, mapDispatchersToProps)(Accounts);

class AccountsIndex extends Component {
	constructor(props, context) {
		super(props, context);
		/*this.state = {
			loading: false,
			accounts: props.accounts,
			providers: props.providers
		};*/
		console.log('AccountsIndex context ', props);
	}
	
	/*
	 * Return all accounts associated with the current provider
	 */
	static getAccounts(providers) {
		console.log('getAccounts() ', providers); 
		//var providers = new Providers(this.state.providers.selectedSigner);
		var w3 = providers.getWallet();
		console.log('got wallet:', typeof w3.eth);
		var accounts;
		if (typeof w3 !== 'undefined') {
			accounts = w3.eth.getAccounts().then(
			     (resolved, error) => {
			    	if (error) {
			    		console.log('error in getAccounts()');
			    		return [];
			    	}
				    console.log('get accounts resolved', resolved);
				    return resolved;
			    });
	    }
		return accounts;
	}
	
	render() {
		console.log('render', this.props.selectedSigner);
		const { state, actions } = this.props;
		return (
		<Provider store={store}>
		  <Layout>
		   <div>
			<h3>Account Settings</h3>
			<ConnectedSources  selectedSigner={this.props.selectedSigner}/>
			<ConnectedAccounts />
		   </div>
		  </Layout>
		</Provider>
	)}
}

export default AccountsIndex;