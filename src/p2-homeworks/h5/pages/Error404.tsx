import React from 'react'
import style from './Error.module.css'

function Error404() {
    return (
        <div className={style.errorBox}>
            <div className={style.errorBox_title}>404</div>
            <div className={style.errorBox_message}>Page not found!</div>
            <div className={style.errorBox_body}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
