import { createSlice } from '@reduxjs/toolkit'

const initialState:any = {
  userdata:{fullName:"",number:"",email:""}
}

export const showTextSlice = createSlice({
  name: 'userslice',
  initialState,
  reducers: {
    showUserData:(state,action)=>{
       state.userdata.push({fullName:action.payload.fullName,number:action.payload.number,email:action.payload.email})
    }
  }
});

// Action creators are generated for each case reducer function
export const { showUserData } = showTextSlice.actions
export default showTextSlice.reducer