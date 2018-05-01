import React, { Component } from 'react';
import { Link } from '../../routes';
import { Button,  Pagination } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Proposal from '../../components/Proposal';
import dffdao from '../../ethereum/dffdao';
import web3 from '../../ethereum/web3';

class ProposalShow extends Component {
	state = {
			value: '',
			errorMessage: '',
			loading: false,
			activeProposal: 1,
			proposal: {}
		};

	handlePaginationChange = async (e, { activeProposal }) => {
		console.log('handlePaginatinChange', activeProposal)
		proposal = getProposal(activeProposal-1);

		this.setState({ activeProposal, proposal })
	}

	static async getInitialProps(props) {
		console.log('getInitialProps');
		const propCount = await dffdao.methods.numberOfProposals().call();
		
		const prop = (propCount > 0) ? await this.getProposal(0) : {};
		
		return ({
			numberOfProposals: propCount,
			proposal: prop
		});
	}	
	
	static async getProposal (proposalId) {
		console.log('get proposal no ', proposalId);
		const proposalData = await Promise.all([
			dffdao.methods.getProposalData1(proposalId).call(),
			dffdao.methods.getProposalData2(proposalId).call(),
			dffdao.methods.getProposalData3(proposalId).call()]);
		console.log(proposalData);
		
		return { 
			id: proposalId,
			type: proposalData[0]._proposalType,
			proposer: proposalData[0]._proposer,
			governor: proposalData[0]._governor,
			description: proposalData[0]._description,
			address1: proposalData[1]._address1,
			address2: proposalData[1]._address2,
			recipient: proposalData[1]._recipient,
			tokenContract: proposalData[1]._tokenContract,
			amount: proposalData[1]._amount,
			memberNoVotes: proposalData[2]._memberVotedNo,
			memberYesVotes: proposalData[2]._memberVotedYes,
			govNoVotes: proposalData[2]._governorVotedNo,
			govYesVotes: proposalData[2]._governorVotedYes,
			executor: proposalData[2]._executor,
			open: proposalData[2]._open
		};
	}
	
	render () {
	    const { activeProposal } = this.state
	    const { numberOfProposals, proposal } = this.props;
	    console.log('index render()', proposal);

	    return (
		<Layout>
			<Pagination 
				defaultActivePage={this.state.activeProposal} 
				totalPages={this.props.numberOfProposals} 
				onPageChange={this.handlePaginationChange} 
			/>
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
			<Proposal proposal={proposal} />
		</Layout>
	    )
	};
}

export default ProposalShow;
