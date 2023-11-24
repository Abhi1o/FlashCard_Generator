// Importing the configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing the flashcardReducer from the flashcardSlice file
import flashcardReducer from "../App/features/flashcardSlice";

// Configuring the Redux store using the configureStore function
const store = configureStore({
  // Specifying the reducer for the store
  reducer: flashcardReducer,
});

// Exporting the configured Redux store
export default store;