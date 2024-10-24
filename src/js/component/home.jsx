import React from "react";
import TrafficLight from "./TrafficLight";

//create your first component
const Home = () => {
	return (
		<>
			<div className="text-center">
				<h1 className="text-center text-white mt-5">Traffic Light</h1>
			</div>
			<div className="lightsContainer shadow-lg">
				<div>
					<TrafficLight />
				</div>
			</div>
		</>
	);
};

export default Home;
