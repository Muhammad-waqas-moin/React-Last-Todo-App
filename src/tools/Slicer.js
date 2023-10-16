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
      // console.log(state.Todos)
      // console.log(state.Name , '=========>' , action.payload)
    },
    delTodo: (state, action) => {
      state.Todos = state.Todos.filter((item) => {
        return item.id != action.payload;
      });
      console.log(state.Todos);
    },
    //      edit: (state , action)=>{
    //         console.log(state)
    //  }
  },
});
export const { add, delTodo } = Slicer.actions;
export default Slicer.reducer;
