import React, { Component } from 'react';

import { Input, Menu, Button, Card, Icon, Label } from 'semantic-ui-react';
import dffdao from '../../ethereum/dffdao';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import Members from '../../ethereum/Members';


class MembersIndex extends Component {	
	
	static async getInitialProps() {
		const memberList = await (new Members).getMemberList();
		return { memberList };
	}

	renderMembers() {
		const members = this.props.memberList.members.map((member) => (
			<Card fluid key={member._index}>	
				<Card.Header size='huge' >{member.name}<Icon name={member._governor ? 'favorite' : ''} /></Card.Header>				
				<Card.Description></Card.Description>
				<Card.Meta size='small'>{member.address}</Card.Meta>
			</Card>
		));
		
		return <Card.Group>{members}</Card.Group>;
	}
	
	render() {
		const { memberList } = this.props;
		
		//console.log('render() ', this.props.memberList);
		
		return (
		<Layout>
		<div>
			<h3>Members</h3>
			<Label basic><Icon name='favorite' />indicates Governor</Label>
			<Link route="/members/new" >
				<Button 
					content="Add Member"
					icon="add" 
					primary
					floated="right"
				/>
			</Link>
			{this.renderMembers()}
		</div>
		</Layout>
	)}
}

export default MembersIndex;