import { AppDispatch } from "../store";
import { PORT } from "../../port/Port";
import { bookActions } from "../slices/book ";
const url = `http://localhost:${PORT}/books`;
export function fetchbookData() {
  return async (dispatch: AppDispatch) => {
    dispatch(bookActions.getbookDataPending(true));
    const response = await fetch(url);
    const bookData = await response.json();
    dispatch(bookActions.getBookData(bookData));
  };
}
