import React from 'react'
import style from './Message.module.css'

type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsType) {
    return (
        <div className={style.message} >
            <img src={props.avatar} alt=""/>
			<div className={style.wrap}>
				<div>{props.name}</div>
				<div>{props.message}</div>
				<div>{props.time}</div>
			</div>

        </div>
    )
}

export default Message
