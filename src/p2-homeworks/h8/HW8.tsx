import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './HW8.module.css';

// export type UserType =

export type InitialPeopleType = Array<UserType>
export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: InitialPeopleType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<InitialPeopleType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div className={s.usersBox} key={p._id}>
            <span className={s.usersBox__name}>{p.name}</span>
            <span className={s.usersBox__age}>age: {p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}));
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}));

    return (
        <div className={s.hw8Wrap}>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div className={s.btnWrap}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortAge}>check 18</SuperButton>
            </div>
            {/*<div>sort down</div>*/}
            {/*<div>check 18</div>*/}


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
