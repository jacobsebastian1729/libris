import axios from "axios";
import { AppDispatch } from "../store";

import { bookShelfListActions } from "../slices/bookShelf";

const url = "http://localhost:8000/bookshelves/";

export function getBookShelfList(userId: string) {
    return async (dispatch: AppDispatch) => {
        const userToken = localStorage.getItem("userToken");
        const res = await axios.get(`${url}/${userId}`, {
            headers: { Authorization: `Bearer $ {userToken}`},
        });
        const bookShelfData = res.data;
        dispatch(bookShelfListActions.getBookShelfList(bookShelfData));
    };
};

export function fetchBookshelfByUserIdThunk(userId:string) {
    return async(dispatch:AppDispatch) => {
      const response = await axios.get(`${url}/${userId}`)
    const data = response.data
    
    }
  }

export function addBookToBookShelfData(userId:string, bookId:string) {
    return async(dispatch:AppDispatch) => {
        const response = await axios.post(`${url}/${userId}/${bookId}`)
        console.log(response, 'Check the bookshelves')
    }
}