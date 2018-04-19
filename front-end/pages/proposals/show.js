import React, { Component } from 'react';
import { Link } from '../../routes';
import { Button, Form, Message, Card, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import Campaign from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';

class CampaignShow extends Component {
	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address);
		
		const summary = await campaign.methods.getSummary().call();
		return { 
			address: props.query.address,
			minimumContribution: summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]
		};
	}
	
	renderCards() {
		const {
			balance,
			manager,
			minimumContribution,
			requestsCount,
			approversCount
		} = this.props;
		
		const items = [
			{
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created his campaign and can create requests',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: minimumContribution,
				meta: 'Minimum Contribution',
				description: 'You must contribute at least this much wei to become an approver',
			},
			{
				header: requestsCount,
				meta: 'Number of Requests',
				description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers',
			},
			{
				header: approversCount,
				meta: 'Number of Approvers',
				description: 'Number of people who have already donated to this campaign',
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Campaign Balance (ether)',
				description: 'The balance is how much money this campaign has left to spend',
			}
		];
		
		return <Card.Group items={items} />;
	}
	
	state = {
		value: '',
		errorMessage: '',
		loading: false
	};
		
	onSubmit = async () => {
			event.preventDefault();
			this.setState({ loading: true, errorMessage: '' });

			try {
				
				const accounts = await web3.eth.getAccounts();
				await factory.methods
					.createCampaign(this.state.minimumContribution)
					.send({
						from: accounts[0]
					});
				
				Router.pushRoute('/');
			} catch (err) {
				this.setState({errorMessage: err.message});
			}
			this.setState({ loading: false })
	};

	
	render () {
		return (
		<Layout>
			<h3>Campaign Show</h3>
			<Grid>
			 <Grid.Row>
			  <Grid.Column width={10}>
			    {this.renderCards()}
			  </Grid.Column>

			  <Grid.Column width={6}>
				<ContributeForm address={this.props.address} />
			  </Grid.Column>
			 </Grid.Row>
			 
			 <Grid.Row>
			   <Grid.Column>
			    <Link route={`/campaigns/${this.props.address}/requests`}>
			      <a>
			        <Button primary>View Requests</Button>
			      </a>
			    </Link>
			   </Grid.Column>
			 </Grid.Row>
			</Grid>
						
				    
		</Layout>
)
	};
}

export default CampaignShow;
