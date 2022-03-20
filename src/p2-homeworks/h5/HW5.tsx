import React from 'react'
import Header from './Header'
import {BrowserRouter, HashRouter} from "react-router-dom";
import RoutesHW from "./Routes";

function HW5() {
	return (
		<div>
			{/*в gh-pages лучше работает HashRouter*/}
			<HashRouter>

				<Header/>

				<RoutesHW/>

			</HashRouter>
		</div>
	)
}

export default HW5
