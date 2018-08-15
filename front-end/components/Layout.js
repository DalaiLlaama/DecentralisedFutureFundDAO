import React from 'react';
import { Container } from 'semantic-ui-react';
//import { Provider } from 'react-redux';
import Head from 'next/head';
import Header from './Header';
import { PersistGate } from 'redux-persist/integration/react';
import storeFactory from '../configureStore';

const { store, persistor } = storeFactory();


export default props => {
	return (
		<Container >
		   <PersistGate loading={null} persistor={persistor}>
			  <Head>
				<link 
					rel="stylesheet" 
					href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" 
				/>
			  </Head>
		      <Header store={store}/>
		    {props.children}
		  </PersistGate>
		</Container>
	);
};