import React, { Component } from 'react';

import { Input, Menu, Segment } from 'semantic-ui-react';
import dffdao from '../../ethereum/dffdao';
import Layout from '../components/Layout';
import { Link } from '../routes';


class DffDaoHome extends Component {	
	static async getInitialProps() {
		const proposals = await dffdao.methods.proposals().call();
		
		return { proposals };
	}

	renderProposals() {
		const items = this.props.proposals.map(address => {
			return {
				header: address,
				description: (
					<Link route={`/proposals/${propid}`}>
						<a>View Proposals</a>
					</Link>
				),
				fluid: true
			}
		});
		
		return <Card.Group items={items} />;
	}
	
	render() {
		
		return (
		<Layout>
		<div>
			<h3>Open proposals</h3>
			<Link route="/proposals/new" >
			<a>
				<Button 
					content="Create Proposals"
					icon="add" 
					primary
					floated="right"
					
				/>
			</a>
			</Link>
			{this.renderProposals()}
		</div>
		</Layout>
	)}
}

export default DffDaoIndex;