import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from "./Request.module.scss"

type RequestPropsType = {
	errorText: string
	info: string
	checked: boolean
	onHandlerSubmitAuth: () => void
	onChangeChecked: (checked: boolean) => void
}


export const Request = (props: RequestPropsType) => {

	const styleInfo = props.checked ? s.request__info : s.request__info_error;

	return (
		<div className={s.request}>
			<div className={styleInfo}>
				<div>
					error text: {props.errorText}
				</div>
				<div>
					info: {props.info}
				</div>

			</div>
			<div>
				<SuperCheckbox
					checked={props.checked}
					onChangeChecked={props.onChangeChecked}>
					:success
				</SuperCheckbox>
			</div>

			<div>
				<SuperButton onClick={props.onHandlerSubmitAuth}>request</SuperButton>
			</div>
		</div>
	)
}