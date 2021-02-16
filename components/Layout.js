import React from 'react';
import Head from 'next/head';
import Footer from './Footer';

const Layout = props => {
    return ( 
        <>
        <Head>
        {/* META DATA */}
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		{/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}

		{/*font-family*/}
		<link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet" />

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />

		{/* TITLE OF SITE */}
		<title>Travel</title>

		{/* favicon img */}
		<link rel="shortcut icon" type="image/icon" href="logo/favicon.png"/>

		{/*font-awesome.min.css*/}
		<link rel="stylesheet" href="css/font-awesome.min.css" />

		{/*animate.css*/}
		<link rel="stylesheet" href="css/animate.css" />

		{/*hover.css*/}
		<link rel="stylesheet" href="css/hover-min.css"/>

		{/*datepicker.css*/}
		<link rel="stylesheet"  href="css/datepicker.css" />

		{/*owl.carousel.css*/}
        <link rel="stylesheet" href="css/owl.carousel.min.css" />

		<link rel="stylesheet" href="css/owl.theme.default.min.css"/>

		{/* range css*/}
        <link rel="stylesheet" href="css/jquery-ui.min.css" />

		{/*bootstrap.min.css*/}
		<link rel="stylesheet" href="css/bootstrap.min.css" />

		{/* bootsnav */}
		<link rel="stylesheet" href="css/bootsnav.css"/>

		{/*style.css*/}
		<link rel="stylesheet" href="css/style.css" />

		{/*responsive.css*/}
		<link rel="stylesheet" href="css/responsive.css" />
        <script src="js/jquery.js"></script>
		
		<script  src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>

		<script  src="js/bootstrap.min.js"></script>

		<script src="js/bootsnav.js"></script>

		<script src="js/jquery.filterizr.min.js"></script>

		<script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

        <script src="js/jquery-ui.min.js"></script>

		<script src="js/jquery.counterup.min.js"></script>
		<script src="js/waypoints.min.js"></script>

        <script  src="js/owl.carousel.min.js"></script>

		<script src="js/jquery.sticky.js"></script>

        
        <script  src="js/datepicker.js"></script>

		
		<script src="js/custom.js"></script>

        </Head>

        <main>
        {props.children}
        </main>
        <Footer/>
        </> );
}
 
export default Layout;