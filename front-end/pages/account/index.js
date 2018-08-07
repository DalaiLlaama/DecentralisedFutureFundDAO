import React, { Component } from 'react';

import { Input, Menu, Icon, Label, List } from 'semantic-ui-react';
//import dffdao from '../../ethereum/dffdao';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
//import web3 from '../../ethereum/web3';
import Providers, { SourceEnum } from '../../ethereum/providers';
//import Members from '../../ethereum/Members';


class AccountsIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			accounts: props.accounts,
			providers: props.providers
		};
	}
	
	static async getInitialProps() {
		console.log('global.selectedSIgner', global.selectedSigner);
		var selectedSigner = global.selectedSigner || SourceEnum.JSONRPC; 
		var providers = new Providers(selectedSigner);
		var accounts = await AccountsIndex.getAccounts(providers);
		return { accounts: accounts, providers:  providers};
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
	
	handleItemSelection = async (event, data) => {
		event.preventDefault();
		console.log('list item clicked ', data.content);
		var providers = new Providers(this.state.providers.selectedSigner);
		providers.selectProvider(data.content);
		// Get accounts for new selection
		var accounts = await AccountsIndex.getAccounts(providers);
		this.setState({ loading: false, accounts: accounts, providers: providers });
	}

	render() {
		//const { accounts } = this.props;
		//console.log('class: ', new Providers());
		
		var providers = new Providers(this.state.providers.selectedSigner);
		console.log('render ', providers);
		var sourceItems = [];
		var sources = providers.sources();
		for (let s in sources) {
			var srcObj = sources[s];
			var renderObj = { key: srcObj.source, content: srcObj.text, as: 'ui' };
			//renderObj.disabled=!srcObj.available;
			if (srcObj.selected) { renderObj.active=true };
			sourceItems.push(renderObj);
			//console.log('s', srcObj, renderObj);
		}
		// Convert accounts to a format that can be used as List items 
		var accountItems = [];
		console.log('accounts ', this.state.accounts);
		for (let a in this.state.accounts) {
			var renderObj = { key: a, content: this.state.accounts[a], as: 'a' };
			accountItems.push(renderObj);
		}
		//console.log(accountItems);
		return (
		<Layout>
		<div>
			<h3>Account Settings</h3>
			<h1>How do you wish to access your wallet?</h1>
			<List 
				items={ sourceItems }
				selection
				onItemClick={this.handleItemSelection}
				size='big'
			/>
			<h1>Select an account</h1>
			<List
				items={ accountItems }
				selection
				horizontal
				size='small'
			/>
		</div>
		</Layout>
	)}
}

export default AccountsIndex;