import React from 'react'
import {NavLink} from "react-router-dom";
import style from './styleHW5.module.css';
import {PATH} from "./Routes";



function Header() {

    type ParamsType = {
        isActive: boolean
    }

    const linkActiveStyle = (params: ParamsType) => {
        return {color: params.isActive ? 'aqua' : ''}
    }

    return (
        <div className={style.header}>
            {/*// add NavLinks*/}
            <div className={style.panel}>
                {'>>'}
                <div className={style.hidden_panel}>
                    <NavLink
                        to={PATH.PRE_JUNIOR}
                        style={linkActiveStyle}
                    >
                        <span className={''}>pre-junior</span>
                    </NavLink>
                    <NavLink
                        to={PATH.JUNIOR}
                        style={linkActiveStyle}
                    >
                        <span className={''} >junior</span>
                    </NavLink>
                    <NavLink
                        to={PATH.JUNIOR_PlUS}
                        style={linkActiveStyle}
                    >
                        <span className={''} >junior+</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
