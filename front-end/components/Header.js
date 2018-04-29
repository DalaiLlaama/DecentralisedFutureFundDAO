import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default class SiteMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
	const { activeItem } = this.state  
  
	return (
	  <div>
		<Menu attached='top' tabular style={{ marginTop: '10px', marginBottom: '20px' }}>
		  <Menu.Item 
		  	name='home' 
		  	active={activeItem === 'home'} 
		    onClick={this.handleItemClick} 
		  >
			<Link route="/">
			  <a className="item">Home</a>
			</Link>
		  </Menu.Item>
		  <Menu.Item 
		  	name='proposals' 
		  	active={activeItem === 'proposals'}
		    onClick={this.handleItemClick} 
		  >
			<Link route="/proposals">
			    <a className="item">Proposals</a>
			</Link>
		  </Menu.Item>
		  <Menu.Item 
		  	name='members' 
		  	active={activeItem === 'members'} 
		  	onClick={this.handleItemClick}
		  >
			  <Link route="/members">
			    <a className="item">Members</a>
			  </Link>
		  </Menu.Item>
		</Menu>
	  </div>
	)
  }
}