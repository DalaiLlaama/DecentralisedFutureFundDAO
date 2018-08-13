import React, { Component } from 'react';

import { Input, Menu, Icon, Label, List } from 'semantic-ui-react';
//import dffdao from '../../ethereum/dffdao';
import Layout from '../../components/Layout';
import Sources from '../../components/Sources';
import { Link } from '../../routes';
//import web3 from '../../ethereum/web3';
import Providers, { SourceEnum } from '../../ethereum/providers';
import { Provider, connect } from 'react-redux';
import storeFactory from '../../configureStore';

const { store, persistor } = storeFactory();

//import Members from '../../ethereum/Members';

const mapStateToProps = (state) => {

	const accounts = state.accounts.accounts;
	// Convert accounts to a format that can be used as List items 
	var accountItems = [];
	console.log('accounts ', accounts);
	for (let a in accounts) {
		var renderObj = { key: a, content: accounts[a], as: 'a' };
		accountItems.push(renderObj);
	}
	
	console.log('state.selecetdSigner', state.provider.selectedSigner);
	return { //signers: sourceItems,
			 selectedSigner: state.provider.selectedSigner,
			 accounts: accountItems
		};
};

const mapDispatchersToProps = (dispatch) => {
	return {
		onSignerClick: (id) => {
			console.log('onSignerClick:', id);
			dispatch({
				type: 'SET_SIGNER',
				text: id
			})
		}
	}
}

const ConnectedSources = connect(mapStateToProps, mapDispatchersToProps)(Sources);

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
	
	/*static async getInitialProps() {
		//console.log('store.getState()', store);
		var selectedSigner = SourceEnum.JSONRPC; //store.selectedSigner || SourceEnum.JSONRPC;
		var providers = new Providers(selectedSigner);
		return { accounts, providers, selectedSigner};
	} */
	
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
			<h1>Select an account</h1>
			<List
				items={ this.props.accounts }
				selection
				horizontal
				size='small'
			/>
		   </div>
		  </Layout>
		</Provider>
	)}
}

export default AccountsIndex;