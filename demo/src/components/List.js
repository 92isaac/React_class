import React from 'react'
import StudentList from './StudentList'

function List() {
    const students=[
        {
            id:1,
            name:'Tumininu',
            age:20,
            skill:'React'


        },

        {
            id:2,
            name:'Lawyer Kunle',
            age:37,
            skill:'javascript'
        },

        {
            id:3,
            name:'Isaac',
            age:27,
            skill:'CSS'
        }


    ]


    const studentAbilities=(students.map(student =><StudentList student={student}/>
    ))
    return (
        <div>
           {studentAbilities}
        </div>
    )
}

export default List
