import React from 'react'
import {NavLink} from "react-router-dom";
import style from './styleHW5.module.css';

function Header() {
    return (
        <div className={style.header}>
            {/*// add NavLinks*/}
            <div className={style.panel}>
                {'>>'}
                <div className={style.hidden_panel}>
                    <NavLink to={'/pre-junior'}>
                        <span className={style.active}>pre-junior</span>
                    </NavLink>
                    <NavLink to={'/gg'}>
                        <span className={''} >junior</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
