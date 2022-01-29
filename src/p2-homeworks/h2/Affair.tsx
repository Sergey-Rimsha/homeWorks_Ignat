import React from 'react'

import style from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    id: number
    priority: string
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.id)}// need to fix



    return (
        <div className={style.affairWrap}>
            {/*// show some text*/}
            <div className={style.title}>{props.affair}</div>
            <div className={style.priority}>{props.priority}</div>
            {/*<button onClick={deleteCallback}>X</button>*/}
            <SuperButton onClick={deleteCallback}>
                X
            </SuperButton>
        </div>
    )
}

export default Affair
