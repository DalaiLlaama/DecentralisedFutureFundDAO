import React, { Component } from 'react';

import { Input, Menu, Icon, Label, List } from 'semantic-ui-react';
import dffdao from '../../ethereum/dffdao';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import Members from '../../ethereum/Members';


class AccountsIndex extends Component {	
	
	static async getInitialProps() {
		const members = new Members();
		await members.init();
		return { members };
	}
	
	handleItemSelection(event, data) {
		console.log('list item clicked ', data.content);
		switch (SourceEnum[data.content]) {
			case SourceEnum.Metamask: 
				//
				web3.selectedSigner = SourceEnum.Metamask;
				break;
			case SourceEnum.Mist:
				break;
			case SourceEnum.Ledger:
				break;
			case SourceEnum.JSONRPC:
				console.log('JSONRPC selected');
				break;
			default:
				console.log('nothing');
		};
	}

	render() {
		const {  } = this.props;
		
		console.log(Object.keys(SourceEnum));
		return (
		<Layout>
		<div>
			<h3>Account Settings</h3>
			<h1>How do you wish to access your wallet?</h1>
			<List 
				items={Object.keys(SourceEnum)} 
				selection
				onItemClick={this.handleItemSelection}
			/>
		</div>
		</Layout>
	)}
}

export default AccountsIndex;