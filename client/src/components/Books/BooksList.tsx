import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BookType } from "../../types/type";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchbookData } from "../../redux/thunk/book";
import BooksListItem from "./BooksListItem";
import Loader from "../loader/Loader";
import "./BookList.css";
export default function BooksList() {
  const isLoad = useSelector((state: RootState) => state.bookItem.isLoading);
  const bookList = useSelector((state: RootState) => state.bookItem.Book);

  const disPatch = useDispatch<AppDispatch>();
  useEffect(() => {
    disPatch(fetchbookData());
  }, [disPatch]);
  console.log(bookList);
  if (isLoad)
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  return (
    <div className="container">
      <div className="main">
        {bookList.map((item, index) => (
          <BooksListItem key={index} bookItem={item} />
        ))}
      </div>
    </div>
  );
}
