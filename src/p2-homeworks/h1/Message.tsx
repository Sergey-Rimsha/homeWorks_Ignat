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
            <div className={style.imgWrap}>
				<img className={style.messageImg} src={props.avatar} alt="user_img"/>
			</div>
			<div className={style.messageWrap}>
				<div className={style.userName}>
					{props.name}
				</div>
				<div className={style.userTxt}>
					{props.message}
				</div>
				<div className={style.messageTime}>
					{props.time}
				</div>
			</div>

        </div>
    )
}

export default Message
