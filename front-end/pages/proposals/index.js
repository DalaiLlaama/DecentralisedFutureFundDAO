import React, { Component } from 'react';
import { Link } from '../../routes';
import { Button,  Pagination } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Proposal from '../../components/Proposal';
import dffdao from '../../ethereum/dffdao';
import Members from '../../ethereum/Members';
import BigNumber from 'big-number';
import web3 from '../../ethereum/web3';

class ProposalShow extends Component {
	state = {
			value: '',
			errorMessage: '',
			loading: false,
			activeProposal: 1,
			proposal: {},
			members: {}
		};
	
	/**
	 * Called on selection of page in the Pagination controller
	 * N.B. Pagination controller starts at 1, whereas proposals in the contract are indexed from 0.
	 * Hence, subtract 1 to retrieve the correct proposal.
	 */
	handlePaginationChange = async (e, { activeProposal, members }) => {
		console.log('handlePaginationChange', activeProposal)
		proposal = ProposalShow.getProposal(activeProposal-1, members);

		this.setState({ activeProposal, proposal })
	}

	static async getInitialProps(props) {
		console.log('getInitialProps');
		const members = new Members;
		const results = await Promise.all([
			dffdao.methods.numberOfProposals().call(),
			members.init()
		]);
		
		const propCount = results[0];
		
		//console.log('results[1]', results[1]);
		
		const prop = (propCount > 0) ? await ProposalShow.getProposal(0, members) : {};
		
		return ({
			numberOfProposals: propCount,
			proposal: prop,
			members: members
		});
	}	
	
	/* Load proposal from blockchain
	 * 
	 */ 
	static async getProposal (proposalId, members) {
		console.log('get proposal no ', proposalId);
		const proposalData = await Promise.all([
			dffdao.methods.getProposalData1(proposalId).call(),
			dffdao.methods.getProposalData2(proposalId).call(),
			dffdao.methods.getProposalData3(proposalId).call(),
			dffdao.methods.TOKEN_DECIMALSFACTOR().call()]);
		//console.log(memberAddressMap);
		
		const addr0 = new BigNumber(0);
		
		const proposer = proposalData[0]._proposer;
		const proposerName = members.getName(proposer);
		const governor = (governor == addr0) ? 'n/a' :proposalData[0]._governor;
		const governorName = members.getName(governor);
		const executor = proposalData[2]._executor;
		const executorName = (executor == addr0) ? 'n/a' : members.getName(executor);
		
		console.log('proposerName', proposerName, ' executorName', executorName);
		
		return { 
			id: proposalId,
			type: proposalData[0]._proposalType,
			proposer: proposer,
			proposerName: proposerName,
			governor: governor,
			governorName: governorName,
			description: proposalData[0]._description,
			address1: proposalData[1]._address1,
			address2: proposalData[1]._address2,
			recipient: proposalData[1]._recipient,
			tokenContract: proposalData[1]._tokenContract,
			amount: Math.round(parseInt(proposalData[1]._amount) / proposalData[3]),
			memberNoVotes: proposalData[2]._memberVotedNo,
			memberYesVotes: proposalData[2]._memberVotedYes,
			govNoVotes: proposalData[2]._governorVotedNo,
			govYesVotes: proposalData[2]._governorVotedYes,
			executor: executor,
			executorName: executorName,
			open: proposalData[2]._open
		};
	}
	
	render () {
	    const { activeProposal } = this.state
	    const { numberOfProposals, proposal } = this.props;
	    console.log('index render()');

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
