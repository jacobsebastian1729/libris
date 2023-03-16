import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { BookType } from "../../types/type";

type Prop = {
    myBook: BookType;
}


function MyBooksItem({ myBook }: Prop) {
    // const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
        MyBooksItem
        <p>{myBook.thumbnail}</p>
        <p>{myBook.title}</p>
        <p>{myBook.author}</p>
    </div>
  )
}

export default MyBooksItem;