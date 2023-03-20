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
import { Button, Typography } from "@mui/material";
export default function BooksList() {
  const isLoad = useSelector((state: RootState) => state.bookItem.isLoading);
  const bookList = useSelector((state: RootState) => state.bookItem.Book);

  const disPatch = useDispatch<AppDispatch>();
  useEffect(() => {
    disPatch(fetchbookData());
  }, [disPatch]);
 
  const getUserData = useSelector(
    (state: RootState) => state.searchBook.userInput
  );
  const [filteredBooks, setFilteredBooks] = useState<BookType[]>([]);
  const [showFiltered, setShowFiltered] = useState(false);

  useEffect(() => {
    const filteredBooks = bookList.filter(
      (bookItem) =>
        bookItem.title.toLowerCase().includes(getUserData.toLowerCase()) ||
        bookItem.author.toLowerCase().includes(getUserData.toLowerCase())
    );

    setFilteredBooks(filteredBooks);
    setShowFiltered(false);
  }, [getUserData, bookList]);

  const handleGenreClick = (genre: string) => {
    const filteredResult = bookList.filter((book) => book.genre === genre);
    setFilteredBooks(filteredResult);
    setShowFiltered(true);
  };

  const handleShowAllClick = () => {
    setShowFiltered(false);
  }
  
    const result = showFiltered ? filteredBooks : bookList.filter(
      (bookItem) =>
        bookItem.title.toLowerCase().includes(getUserData.toLowerCase()) ||
        bookItem.author.toLowerCase().includes(getUserData.toLowerCase())
    );
  
  // const result = getUserData === "" ? bookList : filteredBooks;
  if (!result.length) {
    return <div className="search-message">No matching books found.</div>;
  }

  if (isLoad)
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  return (
    <div className="container ">
      <div style={{paddingTop: '3rem', paddingBottom: '3rem', paddingLeft: '7rem'}}>
      <Typography variant='h5'>You can find {result.length} books in total.</Typography>
      <Button onClick={handleShowAllClick}>Show All</Button>
        <Button onClick={() => handleGenreClick("Novel")}>Novel</Button>
        <Button onClick={() => handleGenreClick("children")}>Children</Button>
        <Button onClick={() => handleGenreClick("Romance")}>Romance</Button>
      </div>
      <div className="main">
        {result.map((item, index) => (
          <BooksListItem key={index} bookItem={item} />
        ))}
 
      </div>
    </div>
  );
}
