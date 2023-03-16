import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyBooksItem from "./MyBooksItem";
import { BookType } from "../../types/type";

export default function MyBooksList() {

  let localeStorageMyBooksList: BookType[] = JSON.parse(localStorage.getItem("myBooksList") || "null");
  if(localeStorageMyBooksList == null) localeStorageMyBooksList = [];

  return (
    <div>
      My Books List
      {localeStorageMyBooksList.map((item) => (
        <MyBooksItem key={item._id} myBook={item}/>
      ))}
    </div>

  )
}
