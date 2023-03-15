export type User = {

}

export type Book = {
    title: string,
    thumbnail: string,
    language: string,
    description: string;
    rating: number;
    genre: string;
    author: string;
}

export type BookList = Book & {
    favorite: string
}

export type BookShelf = {
    userId: string;
    bookList: BookList[];
}
