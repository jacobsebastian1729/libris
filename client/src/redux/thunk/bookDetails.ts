import { AppDispatch } from "../store";
import { bookActions } from "../slices/book";
import { PORT } from "../../port/Port";

export function fetchBookDetail(bookId: string | undefined) {
  const url = `https://back-end-libris.onrender.com/books/${bookId}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data, "hhhhh");
    dispatch(bookActions.getBookDetail(data));
  };
}
