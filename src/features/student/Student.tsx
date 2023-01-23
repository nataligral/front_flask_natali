import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectStudents, getStudentsAsync, addStudentsAsync, addGradesAsync } from './studentSlice'
const Student = () => {
  const students = useAppSelector(selectStudents);
  const dispatch = useAppDispatch();
  const [searchName, setSearchName] = useState("");






  useEffect(() => {
    console.table(students)
  }, [students.length])
  useEffect(() => {
    dispatch(getStudentsAsync())
  }, [])


  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [math, setMath] = useState(0);
  const [syber, setSyber] = useState(0);
  const [english, setEnglish] = useState(0);

  return (
    <div>
      <h1>Students</h1>
      Student name:<input onChange={(e) => setname(e.target.value)} /><br />
      Student Email:<input onChange={(e) => setemail(e.target.value)} />
      <button onClick={() => dispatch(addStudentsAsync({ name, email }))}>add student</button> <br />
      {students.map((student, i) =>
        <div key={i}>
           
          <br />
          Math: <input type="number" onChange={(e) => setMath((+e.target.value))} /> <br />
          Syber: <input type="number" onChange={(e) => setSyber((+e.target.value))} /> <br />
          English: <input type="number" onChange={(e) => setEnglish((+e.target.value))} /> <br />
          <button onClick={() => dispatch(addGradesAsync({ student_id: student.student_id, math: math, syber:syber, english: english }))}>
            Add grades
          </button>
    
          Name: {student.name}, Email: {student.email}, Id: {student.student_id}
          {student.math && <span> Math: {student.math}</span>}
          {student.syber && <span> Syber: {student.syber}</span>}
          {student.english && <span> English: {student.english}</span>}

        </div>)}

    </div>


  )
}


export default Student
