import { createSlice } from "@reduxjs/toolkit";


const initialState = {

Todos : []

}

export const Slicer = createSlice({
    name: 'showTodo',
    initialState,
    reducers: {
         add: (state , action)=>{
            state.Todos =  [...state.Todos , action.payload]
            // console.log(state.Todos)
                // console.log(state.Name , '=========>' , action.payload)

         },
    //      delete1: (state , action)=>{
    //         console.log(state , action)
    //  }
//      edit: (state , action)=>{
//         console.log(state)
//  }

    }
    
})
export const { add } = Slicer.actions;
export default Slicer.reducer;