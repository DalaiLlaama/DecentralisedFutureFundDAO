import React, { Component } from 'react';

import { Input, Menu, Button, Card, Icon } from 'semantic-ui-react';
import dffdao from '../../ethereum/dffdao';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';


class MembersIndex extends Component {	
	
	static async getInitialProps() {
		const addresses = await dffdao.methods.getMembers().call();
		
		const members = await Promise.all(
			addresses.map(address => {
				return dffdao.methods.getMemberData(address).call()
					.then(function(member) {
						member.address = address;
						console.log(member._name);
						member.name = web3.toAscii(member._name);
						return member;
						});
			})
		);
		//console.log(members);
		
		return { members };
	}

	renderMembers() {
		const members = this.props.members.map((member) => (
			<Card>	
				<Card.Header>{member.name}</Card.Header>
				<Card.Description>{member.address}</Card.Description>
				<Card.Content><a><Icon name={member._governor ? 'favorite' : ''} /></a></Card.Content>
			</Card>
		));
		
		return <Card.Group>{members}</Card.Group>;
	}
	
	render() {
		
		return (
		<Layout>
		<div>
			<h3>Members</h3>
			<Link route="/members/new" >
				<a>
					<Button 
						content="Add Member"
						icon="add" 
						primary
						floated="right"
					/>
				</a>
			</Link>
			{this.renderMembers()}
		</div>
		</Layout>
	)}
}

export default MembersIndex;