import { createSlice } from "@reduxjs/toolkit";

import { BookShelf } from "../../types/type";
import { UserDataType } from "../../types/type";

type InitialState = {
    bookShelfList: BookShelf[];
    loginUser: UserDataType;
};

const initialState: InitialState = {
    bookShelfList: [
        {
            userId: '',
            bookList: [{
                _id:'',
                title: "",
                thumbnail: "",
                description: "",
                rating: 0,
                genre: "",
                author: "",
                language: '',
            }]
        },
    ],
    loginUser: {
        _id: '',
        email: '',
        fullName: '',
        profile_img: '',
        about_me: '',
        isAdmin: false,
        status: 'inactive',
        followers: [],
        following: [],
        bookShelves: []
      }

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