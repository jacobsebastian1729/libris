import { createSlice } from "@reduxjs/toolkit";

import { BookShelf } from "../../types/type";
import { UserDataType } from "../../types/usertype";

type InitialState = {
    bookShelfList: BookShelf[];
    loginUser: UserDataType;
};

const initialState: InitialState = {
    bookShelfList: [
        {
            bookList: [{
                _id: "",
                title: "",
                thumbnail: "",
                description: "",
                rating: 0,
                genre: "",
                author: "",
            }]
        },
    ],
    loginUser: []

};

const bookShelfListSlice = createSlice ({
    name: "bookShelfList",
    initialState,
    reducers: {
        getBookShelfList: (state, action) => {
            state.bookShelfList = action.payload;
        },
    },
})

export const bookShelfListActions = bookShelfListSlice.actions;

const bookShelfListReducer = bookShelfListSlice.reducer;

export default bookShelfListReducer;