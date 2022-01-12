import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    id: number
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.id)}// need to fix



    return (
        <div>
            {/*// show some text*/}
            {props.affair}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
