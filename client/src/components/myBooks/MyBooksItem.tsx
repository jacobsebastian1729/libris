import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { BookType } from "../../types/type";

type Prop = {
    book: string;
}


function MyBooksItem({ book }: Prop) {
    // const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
        <p>book</p>
        {/* <p>{myBook.thumbnail}</p>
        <p>{myBook.title}</p>
        <p>{myBook.author}</p> */}
    </div>
  )
}

export default MyBooksItem;