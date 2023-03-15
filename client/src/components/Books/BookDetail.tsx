import React from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchBookDetail } from "../../redux/thunk/bookDetails";

//console.log(productDetail, "got details");
export default function BookDetail() {
  const { bookId } = useParams();
  const bookDetail = useSelector(
    (state: RootState) => state.bookItem.bookDetails
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBookDetail(bookId));
    console.log(bookId, "got id");
  }, [dispatch, bookId]);
  return (
    <div>
      BookDetail
      <p>{bookDetail.author}</p>
      <p>{bookDetail.description}</p>
      <p>{bookDetail.thumbnail}</p>
      <p>{bookDetail.title}</p>
      <p>{bookDetail.genre}</p>
    </div>
  );
}
