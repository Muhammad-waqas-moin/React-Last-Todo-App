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
      state.Todos = state.Todos.filter((item) => {
        return item.id != action.payload;
      });
      console.log(state.Todos);
    },
  },
});
export const { add, delTodo } = Slicer.actions;
export default Slicer.reducer;
