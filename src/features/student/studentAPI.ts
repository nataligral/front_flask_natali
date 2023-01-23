import axios from 'axios';
import { resolve } from 'path';
import { MY_SERVER } from '../../env';
import Student from '../models/Student'

export const getStudents=async() =>{
  return await axios.get(MY_SERVER).then((res) => res.data);

}
export function addStudent (stu:Student) {
  return new Promise<{data: Student}>((resolve)=>
       axios.post(MY_SERVER, stu).then(res =>resolve( {data: res.data})));
}

export function updStudent (stu:Student) {
  
  return new Promise<{data: any}>((resolve)=>
      axios.put(MY_SERVER + "/" + stu.student_id, stu).then(res => resolve({ data: res.data })));
}
