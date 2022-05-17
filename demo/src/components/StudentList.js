import React from 'react'


function StudentList({student}) {
  return (
    <div>
        <h1>My name is {student.name}.I am {student.age} years old. I know {student.skill}</h1>
    </div>
  )
}

export default StudentList
