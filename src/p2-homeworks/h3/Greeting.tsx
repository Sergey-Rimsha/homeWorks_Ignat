import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number   // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    // const inputClass = error ? s.error : s.right; // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div className={s.inputWrap}>
                <SuperInputText value={name} onKeyPress={onKeyPressHandler} onChange={setNameCallback}/>
                {/*<input value={name} onKeyPress={onKeyPressHandler} onChange={setNameCallback} className={inputClass}/>*/}
                <span className={s.errorMessage}>{error}</span>
            </div>
            {/*<button disabled={!!error} onClick={addUser}>add</button>*/}
            <SuperButton disabled={!!error} onClick={addUser}>add</SuperButton>
            <span>{`Total Users: ${totalUsers}`}</span>
        </div>
    )
}

export default Greeting
