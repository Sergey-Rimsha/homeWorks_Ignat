import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import style from './HW6.module.css';

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value));

        // setValue()
    }

    return (
        <div className={style.HW6Box}>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <span className={style.imgWrap}>
                    <img src={'https://cdn-icons.flaticon.com/png/512/3642/premium/3642497.png?token=exp=1647768720~hmac=8c486feef6ec02e2c587decb3c2db7aa'} alt={'pencil'} />
                </span>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
