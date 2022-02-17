import React, {ReactNode} from 'react';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '@mui/material/Grid';
import Cart from '../components/Cart';

export default function CheckoutLayout({children}: {children: ReactNode | ReactNode[]}) {
	return (
		<section className={'bdl-checkout-layout'}>
			<Header />
			<main className={'bdl-checkout-layout__main'}>
				<Container className={'bdl-checkout-layout__container'}>
					<Grid container spacing={2}>
						<Grid item md={9} sm={8} xs={12} order={{xs: 2, sm: 1}}>
							{children}
						</Grid>
						<Grid className='bdl-checkout-layout__basket-col' item md={3} sm={4} xs={12} order={{xs: 1, sm: 2}}>
							<Cart />
						</Grid>
					</Grid>
				</Container>
			</main>
			<Footer />
		</section>
	);
}