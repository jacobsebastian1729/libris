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