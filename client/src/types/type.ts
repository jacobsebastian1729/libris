export type UserType = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type UserDataType = {
    _id: string;
    email: string;
    fullName: string;
    profile_img?: string;
    about_me?: string;
    isAdmin: boolean;
    status: string;
    followers: string[];
    following: string[];
    bookShelves: string[];
    // comments: string[];
}

export type BookType = {
    title: string;
    thumbnail: string;
    language: string;
    description: string;
    rating: number;
    genre: string;
    author: string;
    _id: string;
  };

export type BookList = BookType & {
    bookShelf: string
}

export type BookShelf = {
    userId: string;
    bookList: BookList[];
}
