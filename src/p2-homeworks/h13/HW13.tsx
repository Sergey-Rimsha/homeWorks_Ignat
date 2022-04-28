import React, {useState} from "react";
import {Request} from "./Request";
import {RequestAPI} from "./RequestAPI";

export const HW13 = () => {

	const message = '...touch request button';

	const [checked, setChecked] = useState(false)
	const [errorText, setErrorText] = useState(message)

	const [info, setInfo] = useState(message)

	const onHandlerSubmitAuthAPI = () => {
		RequestAPI.testAuth(checked)
			.then((res) => {
				setErrorText(res.data.errorText);
				setInfo(res.data.info);
				console.log(res.data)
			})
			.catch((error) => {
				setErrorText(error.response.data.errorText);
				setInfo(error.response.data.info);
				console.log({...error});
				console.log(error.response ? error.response.data.errorText : error.message);
			})
	}

	const onChangeChecked = (checked: boolean) => {

		setChecked(checked);
		setErrorText(message);
		setInfo(message);
	}

	return (
		<div>
			<hr/>
			<span>
                homeworks 12
            </span>

			<Request
				errorText={errorText}
				info={info}
				checked={checked}
				onHandlerSubmitAuth={onHandlerSubmitAuthAPI}
				onChangeChecked={onChangeChecked}
			/>

			<hr/>
		</div>
	)
}