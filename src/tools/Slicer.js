import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Todos: [],
};

export const Slicer = createSlice({
  name: "showTodo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.Todos = [...state.Todos, action.payload];
    },
    delTodo: (state, action) => {
      console.log(action.payload)
      state.Todos = state.Todos.filter((item) => {
        return item.id != action.payload;
      });
   
    },
    editTodo: (state, action) => {
      console.log("action" ,action.payload);
      state.Todos = state.Todos.map((item)=>{
          return item.id === action.payload.id ? {...item , Task : action.payload.Task, Name: action.payload.Name} : item
      })
      console.log(state.Todos)
      // state.Todos = state.Todos.filter((item) => {
      //   return item.id != action.payload;
      // });
   
    },
  },
});
export const { add, delTodo , editTodo} = Slicer.actions;
export default Slicer.reducer;
