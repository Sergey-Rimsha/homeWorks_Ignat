import React from 'react'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";

import {
	Routes,
	Route
} from "react-router-dom";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";

export const PATH = {
	PRE_JUNIOR: '/pre-junior',
	JUNIOR: '/junior',
	JUNIOR_PlUS: '/junior_plus'
	// add paths
}

function RoutesHW() {
	return (
		<div>
			{/*Switch выбирает первый подходящий роут*/}
			<Routes>

				{/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
				{/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
				{/*<Route element={() => <PreJunior/>}/>*/}
				<Route path={'/'} element={<PreJunior/>}/>

				<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
				<Route path={PATH.JUNIOR} element={<Junior/>}/>
				<Route path={PATH.JUNIOR_PlUS} element={<JuniorPlus/>}/>
				{/*// add routes*/}

				{/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
				<Route path={'/*'} element={<Error404/>}/>

			</Routes>

		</div>
	)
}

export default RoutesHW
