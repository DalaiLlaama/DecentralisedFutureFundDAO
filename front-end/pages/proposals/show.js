import React, { Component } from 'react';
import { Link } from '../../routes';
import { Button, Form, Message, Card, Grid, Pagination } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import dffdao from '../../ethereum/dffdao';
import web3 from '../../ethereum/web3';

class ProposalShow extends Component {
	static async getInitialProps(props) {
		state = { activeProposal: 1 }

		const propCount = await dffdao.methods.numberOfProposals().call();
		const propCount = await dffdao.methods.getProposalData1(proposalNum).call();

		handlePaginationChange = (e, { activeProposal }) => this.setState({ activeProposal })


		const proposalNum = query.propno;
		console.log('show prop no ', proposalNum);
		const propData1 = await dffdao.methods.getProposalData1(proposalNum).call();
		const propData2 = await dffdao.methods.getProposalData2(proposalNum).call();
		const propData3 = await dffdao.methods.getProposalData3(proposalNum).call();
		return { 
			type: propData1._proposalType,
			proposer: propData1._proposer,
			governor: propData1._governor,
			description: propData1._description,
			address1: propData2._address1,
			address2: propData2._address2,
			recipient: propData1._recipient,
			tokenContract: propData2._tokenContract,
			amount: propData2._amount,
			memberNoVotes: propData3._memberVotedNo,
			memberYesVotes: propData3._memberVotedYes,
			govNoVotes: propData3._governorVotedNo,
			govYesvotes: propData3._governorVotedYes,
			executor: propData3._executor,
			open: propData3._open,
		};
	}
	
	renderCards() {
		const {
			type,
			proposer,
			governor,
			description,
			address1,
			address2,
			recipient,
			tokenContract,
			amount,
			memberNoVotes,
			memberYesVotes,
			govNoVotes,
			govYesVotes,
			executor,
			open
		} = this.props;
		
		const items = [
			{
				header: type,
				meta: 'Proposal Type',
				description: 'Proposal type...',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: proposer,
				meta: 'Proposer Address',
				description: 'address of the proposer',
			},
			{
				header: governor,
				meta: 'Governor',
				description: 'Governor address',
			},
			{
				header: description,
				meta: 'Proposal Description',
				description: 'Describes this proposal',
			},
			{
				header: address1,
				meta: 'Address 1',
				description: 'Address 1, what else?',
			},
			{
				header: address2,
				meta: 'Address 2',
				description: 'Address 2, what else?'
			},
			{
				header: recipient,
				meta: 'Recipient',
				description: 'Address of the proposal\'s recipient',
			},
			{
				header: tokenContract,
				meta: 'Token Contract',
				description: 'Address of the token contract',
			},
			{
				header: web3.utils.fromWei(amount, "ether"),
				meta: 'Amount',
				description: 'Amount of the proposal',
			},
			{
				header: memberNoVotes,
				meta: 'Member No Votes',
				description: '# of Member No Votes',
			},
			{
				header: memberYesVotes,
				meta: 'Member Yes Votes',
				description: '# of Member Yes Votes',
			},
			{
				header: govNoVotes,
				meta: 'Governor No Votes',
				description: '# of Governor No Votes',
			},
			{
				header: govYesVotes,
				meta: 'Governor Yes Votes',
				description: '# of Governor Yes Votes',
			},
			{
				header: executor,
				meta: 'Executor Address',
				description: 'Executor Address',
			},
			{
				header: open,
				meta: 'Open?',
				description: 'Is this proposal open?',
			}
		];
		
		return <Card.Group items={items} fluid />;
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
				await dffdao.methods
					.voteNo(this.props.url.query.propno)
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
	    const { activeProposal } = this.state

	    return (
		<Layout>
			<Pagination 
				defaultActivePage={0} 
				totalPages={10} 
				onPageChange={this.handlePaginationChange} 
			/>
			<h3>Proposal Detail</h3>
			<Link route="/proposals/new" >
			<a>
				<Button 
					content="Create Proposal"
					icon="add" 
					primary
					floated="right"					
				/>
			</a>
			</Link>
			<Grid>
			 <Grid.Row>
			  <Grid.Column width={30}>
			    {this.renderCards()}
			  </Grid.Column>

			 </Grid.Row>
			 
			 <Grid.Row>
			   <Grid.Column>
			    <Link route={`/proposals/${this.props.url.query.propno}/requests`}>
			      <a>
			        <Button primary>Vote Yes</Button>
			      </a>
			    </Link>
			   </Grid.Column>
			 </Grid.Row>
			</Grid>
						
				    
		</Layout>
)
	};
}

export default ProposalShow;
