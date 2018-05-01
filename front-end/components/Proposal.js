import React, { Component } from 'react';
import { Link } from '../routes';
import { Button, Table, Card, Grid, Segment, Label, Icon } from 'semantic-ui-react';
import dffdao from '../ethereum/dffdao';
import web3 from '../ethereum/web3';

class Proposal extends Component {
	state = {
		value: '',
		errorMessage: '',
		loading: false
	};
		
	onSubmit = async (isYes) => {
			event.preventDefault();
			this.setState({ loading: true, errorMessage: '' });

			try {
				
				const accounts = await web3.eth.getAccounts();
				if (isYes) {
					await dffdao.methods
						.voteYes(this.props.proposal.id)
						.send({
							from: accounts[0]
						});
				} else {
					await dffdao.methods
					.voteNo(this.props.proposal.id)
					.send({
						from: accounts[0]
					});
					
				}
				
				Router.pushRoute('/');
			} catch (err) {
				this.setState({errorMessage: err.message});
			}
			this.setState({ loading: false })
	};

	
	render () {
		const { proposal } = this.props;
		
		//const proposalApproved = this.props.proposal.memberYesVotes > proposal.memberNoVotes;
		
		//console.log('render() ', this.props);
		var typeText = '';
		var amountDenom = '';
		switch (proposal.type) {
			case '0': 
				typeText = "Ether Payment";
				amountDenom = 'ETH';
				break;
			case '1':
				typeText = "DFF Token Payment";
				amountDenom = 'DFF';
				break;
			case '2':
				typeText = "Other Token Payment";
				amountDenom = 'X'
				break;
			case '3':
				typeText = "Mint Tokens";
				break;
			case '4':
				typeText = "AddRule";
			case '5': 
				typeText = "Delete Rule";
				break;
			case '6':
				typeText = "Update BTTS Token";
				break;
			case '7':
				typeText = "Update DAO";
				break;
			case '8':
				typeText = "Add Member";
				break;
			case '9':
				typeText = "Add Governor";
				break;
			case '10':
				typeText = "Remove Member";
		};
		
		const voteResult = "PENDING";
		const openText = proposal.open ? "OPEN" : "CLOSED";
		const labelColour="teal";

	    return (
	      <div>
			<Grid columns={2}>
			 <Grid.Row>
			  <Grid.Column>
			   <Segment.Group>
			  	<Segment>
			        <Label as='a' color={labelColour} ribbon>Description</Label>
			        {proposal.description}
		        </Segment>
			  	<Segment>
			        <Label as='a' color={labelColour} ribbon>Type</Label>
			        {typeText}
			    </Segment>
			    <Segment>
			        <Label as='a' color={labelColour} ribbon>Amount</Label>
			        {proposal.amount}
			        {' ' + amountDenom}
			    </Segment>
			    <Segment>
			        <Label as='a' color={labelColour} ribbon>Token</Label>
			        {proposal.tokenContract}
			    </Segment>
			    <Segment>
			        <Label as='a' color={labelColour} ribbon>Votes</Label>
			        <Table definition>
				        <Table.Header>
				         <Table.Row>
				          <Table.HeaderCell />
				          <Table.HeaderCell><Icon name="checkmark" color="red" size="large" /></Table.HeaderCell>
				          <Table.HeaderCell><Icon name="remove" color="green"  size="large" /></Table.HeaderCell>
				         </Table.Row>
				        </Table.Header>
	
				        <Table.Body>
				         <Table.Row>
				          <Table.Cell>Governors</Table.Cell>
				          <Table.Cell>{proposal.govYesVotes}</Table.Cell>
				          <Table.Cell>{proposal.govNoVotes}</Table.Cell>
				         </Table.Row>
				         <Table.Row>
				          <Table.Cell>Members</Table.Cell>
				          <Table.Cell>{proposal.memberYesVotes}</Table.Cell>
				          <Table.Cell>{proposal.memberNoVotes}</Table.Cell>
				         </Table.Row>
				        </Table.Body>
				        <Label>Result</Label>
				        {voteResult}
			        </Table>
			    </Segment>
		      </Segment.Group>

			  </Grid.Column>
			  <Grid.Column>
				  	<Segment textAlign="center">
				        <Label as='a' color={proposal.open ? 'green' : 'black'} size="huge">
				        	{openText}
				        </Label>
				    </Segment>
					<Segment.Group>
				  	 <Segment>
				        <Label as='a' color={labelColour} ribbon>Proposer</Label>
				        {proposal.proposer}
			         </Segment>
				  	 <Segment>
				        <Label as='a' color={labelColour} ribbon>Governor</Label>
				        {proposal.governor}
				     </Segment>
				  	 <Segment>
				        <Label as='a' color={labelColour} ribbon>Addresses</Label>
				        <p>{proposal.address1}</p>
				        <p>{proposal.address2}</p>
				     </Segment>
				  	 <Segment>
				        <Label as='a' color={labelColour} ribbon>Recipient</Label>
				        {proposal.recipient}
				     </Segment>
				  	 <Segment>
				        <Label as='a' color={labelColour} ribbon>Executor</Label>
				        {proposal.executor}
				     </Segment>
			      </Segment.Group>
			  
			  </Grid.Column>
			 </Grid.Row>
			 
			 <Grid.Row>
			   <Grid.Column>
			        <Button 
			        	positive 
			        	onClick={event => this.onSubmit({ isYes: true })}
			        	loading={this.state.loading}
			        >Vote Yes</Button>
			   </Grid.Column>
			   <Grid.Column>
		        <Button 
		        	negative 
		        	positive 
		        	onClick={event => this.onSubmit({ isYes: false })}
		        	loading={this.state.loading}
		        >Vote No</Button>
		   </Grid.Column>
			 </Grid.Row>
			</Grid>
		  </div>
	    )
	};
}

export default Proposal;
