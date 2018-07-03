import React, { Component } from 'react';

import { Input, Menu, Icon, Label, List } from 'semantic-ui-react';
import dffdao from '../../ethereum/dffdao';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import provider from '../../ethereum/providers';
import { SourceEnum, Providers } from '../../ethereum/providers';
import Members from '../../ethereum/Members';


class AccountsIndex extends Component {	
	
	/*
	 * Return all accounts associated with the current provider
	 */
	static getAccounts() {
		var accounts = web3.eth.getAccounts().then(
			(resolved) => {
				console.log('resolved', resolved);
				return resolved;
			}
		);
		return accounts;
	}
	
	static async getInitialProps() {
		var accounts = await AccountsIndex.getAccounts();
		return { accounts };
	}
	
	handleItemSelection(event, data) {
		console.log('list item clicked ', data.content);
		web3.selectedSigner = data.content;
		switch (SourceEnum[data.content]) {
			case SourceEnum.METAMASK: 
				//
				break;
			case SourceEnum.MIST:
				break;
			case SourceEnum.LEDGER:
				break;
			case SourceEnum.JSONRPC:
				console.log('JSONRPC selected');
				break;
			default:
				console.log('nothing');
		};
	}

	render() {
		const { accounts } = this.props;
		
		var sourceItems = [];
		var sources = (new Providers()).sources();
		for (let s in sources) {
			var srcObj = sources[s];
			var renderObj = { key: srcObj.source, content: srcObj.text, as: 'ui' };
			renderObj.disabled=!srcObj.available;
			if (srcObj.selected) { renderObj.active=true };
			sourceItems.push(renderObj);
			//console.log('s', srcObj, renderObj);
		}
		var accountItems = [];
		console.log('accounts ', accounts);
		for (let a in accounts) {
			var renderObj = { key: a, content: accounts[a], as: 'a' };
			accountItems.push(renderObj);
		}
		console.log(accountItems);
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