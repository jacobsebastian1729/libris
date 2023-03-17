import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import './App.css';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetail from './components/Books/BookDetail';
import MyAchievement from './components/User/MyAchievement';
import UserInformation from './components/User/UserInformation';
import BookShelves from './pages/BookShelves';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MyBooks from './pages/MyBooks';
import OneBookShelf from './components/BookShelves/OneBookShelf';
import LogIn from './components/User/LogIn';
import Register from './components/User/Register';
import Friends from './components/Friends/Friends';
import DashBoard from './components/DashBoard/DashBoard';
import UserBoard from './components/DashBoard/UserBoard';
import BooksBoard from './components/DashBoard/BooksBoard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:bookId' element={<BookDetail />} />
          <Route path='/:userId/books' element={<MyBooks />} />
          <Route path='/:userId/achievment' element={<MyAchievement />} />
          <Route path='/:userId/setting' element={<UserInformation />} />
          <Route path='/bookshelves/all' element={<BookShelves />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/:userId/friends' element={<Friends />} />
          <Route
            path='/bookshelves/:bookshelvesId'
            element={<OneBookShelf />}
          />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/dashboard/users' element={<UserBoard />} />
          <Route path='/dashboard/books' element={<BooksBoard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
