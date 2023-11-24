//in initialstate we are taking the initial state of localstoragey
import { createSlice } from "@reduxjs/toolkit";
// import { stringify } from "postcss";

/*here we  r using ternary to check flashcard in the local storage if the flashcard is present then we will parse them 
or and take take them with the help of getItem() meathod else we will write empty array */ 
const initialState = {
  flashcards: localStorage.getItem("flashcards") ? JSON.parse(localStorage.getItem("flashcards")):[],
};

/*here we are creating slice as flashcardslice it  accepts an initial state, an object of reducer functions,
 and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state. */
export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
  
    setFlashCard : (state, action) => {
    
      state.flashcards.push(action.payload)
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },

    removeCard : (state, action) => {
      state.flashcards = state.flashcards.filter((flashcard) => 
      flashcard.id !== action.payload
      );
      localStorage.setItem("flashcards",JSON.stringify(state.flashcards))

    },
},
});


export const { setFlashCard, removeCard } = flashcardSlice.actions;

export default flashcardSlice.reducer;