import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = Array<InAffairsType> // need to fix any
export type FilterType = 'all' | AffairPriorityType

export type InAffairsType = {
    _id: number
    name: string
    priority: string
}

// constants
const defaultAffairs: AffairType = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType, filter: FilterType): AffairType => { // need to fix any

    if (filter === 'all') {
        return affairs
    }
    if (filter === 'low') {
        return affairs.filter(f => f.priority === filter)
    }
    if (filter === 'middle') {
        return affairs.filter(f => f.priority === filter)
    }
    if (filter === 'high') {
        return affairs.filter(f => f.priority === filter)
    }

    return affairs
     // need to fix
}
export const deleteAffair = (affairs: AffairType, _id: number): Array<InAffairsType> => { // need to fix any
    return affairs.filter(f => f._id !== _id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<InAffairsType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
