import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import Student from '../models/Student'
import { addStudent, getStudents ,updStudent} from './studentAPI';


export interface StudentState {
  students:Student[]
  student_id: number;
  name: string;
  email: string;
  math: number;
  syber: number;
  english: number;
}

const initialState: StudentState = {
  students:[],
  student_id:0,
  name: "",
  email:"",
  math: 0,
  syber: 0,
  english: 0
};

export const getStudentsAsync = createAsyncThunk(
  'student/getStudents',
  async () => {
    const response = await getStudents();
    
    return response;
  }
);
export const addStudentsAsync = createAsyncThunk(
  'student/addStudent',
  async (stu:Student) => {
    const response = await addStudent(stu);
   
    return response;
  }
);


export const addGradesAsync = createAsyncThunk(
  'student/updStudent',
  async (stu:any) => {
    const response = await updStudent(stu);
  
    return response;
  }
);

export const StudentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsAsync.fulfilled, (state,action) => {
        console.log(action.payload)
       
        state.students= action.payload
      })
      .addCase(addStudentsAsync.fulfilled, (state,action) => {
       
        state.students.push(action.payload.data)
      })
      

      .addCase(addGradesAsync.fulfilled, (state,action) => {
        console.log(action.payload)
  
      // let temp = state.students.filter(stu => stu.student_id === action.payload.student_id)[0]

      });
  },
});

export const {  } = StudentSlice.actions;

export const selectStudents = (state: RootState) => state.student.students;


export default StudentSlice.reducer;
