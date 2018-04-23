import React, { Component } from 'react';

import { Container, Header, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';
//import logo from '../dfftxt.png';

class DffDaoIndex extends Component {

	render() {
		
		return (
		<Layout>
		<Container>
			<Header as='h2'>The Decentralised Future Fund DAO</Header>
			<Image src='./dfftxt.png' size='medium' centered />
			<p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi 
			nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix 
			fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.

			Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores 
			adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete 
			utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi 
			convenire mnesarchum eu per, quas minimum postulant per id.
			</p>
		</Container>
		</Layout>
	)}
}

export default DffDaoIndex;