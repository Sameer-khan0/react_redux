import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addtodo:(state,action)=>{
            const {id,text}=action.payload
            console.log(action.payload)
            const newTodo = {
                id,
                text,
                date: new Date().toLocaleString(), 
                complete: false,
              };
              state.push(newTodo);
        },
        removetodo:(state,action)=>{
            return   state.filter((item)=> item.id !== action.payload )
        }
    }
})

export const {addtodo,removetodo} =todoSlice.actions;
export default todoSlice.reducer