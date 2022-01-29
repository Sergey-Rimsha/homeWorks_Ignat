import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType, InAffairsType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: InAffairsType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            id={a._id}
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>

            {mappedAffairs}
            <SuperButton onClick={setAll}>
                All
            </SuperButton>
            <SuperButton onClick={setHigh}>
                High
            </SuperButton>
            <SuperButton onClick={setMiddle}>
                Middle
            </SuperButton>
            <SuperButton onClick={setLow}>
                Low
            </SuperButton>
            {/*<button onClick={setAll}>All</button>*/}
            {/*<button onClick={setHigh}>High</button>*/}
            {/*<button onClick={setMiddle}>Middle</button>*/}
            {/*<button onClick={setLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
