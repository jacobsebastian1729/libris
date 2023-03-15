import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../../redux/store"
import { getBookShelfList } from "../../redux/thunk/bookShelf";

export default function BookShelvesList() {
  const userInformation = useSelector(
    (state: RootState) => state.user.userInformation
  );
  const userId = userInformation._id;
  const bookShelfList = useSelector((state: RootState) => state.bookShelf.bookShelfList);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getBookShelfList(userId));
  }, [dispatch, userId])

  console.log(bookShelfList, "bookShelfList")
  return (
    <div>BookShelvesList</div>
  )
}
