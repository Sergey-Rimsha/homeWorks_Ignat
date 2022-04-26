import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ActionThemeType, changeThemeC, ThemeType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {Dispatch} from "redux";

// const themes = ['dark', 'red', 'some'];

function HW12() {

    const themes = useSelector<AppStoreType, Array<string>>(state => state.theme.map(t => t.name));
    const themeActive = useSelector<AppStoreType, ThemeType | undefined>(state => state.theme.find(t => t.isActive));

    const dispatch = useDispatch<Dispatch<ActionThemeType>>();
    // useDispatch, onChangeCallback

    let theme = themeActive ? themeActive.name : 'some'; // useSelector

    const onChangeThemeSelect = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <div>
                <SuperSelect
                    value={theme}
                    options={themes}
                    onChangeOption={onChangeThemeSelect}
                />
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
