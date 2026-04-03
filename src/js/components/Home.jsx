import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar"; 
import Footer from "./Footer";
import Contain from "./Contain";

//create your first component
const Home = () => {
	
	
	
	return (
		<div>
			<Navbar/>

			<Contain/>
			
			<Footer/>

		</div>
		
		
	);
};

export default Home;