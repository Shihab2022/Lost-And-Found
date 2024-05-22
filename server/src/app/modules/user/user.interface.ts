interface Profile {
    bio: string;
    age: number;
}

export interface TUser {
    name: string;
    email: string;
    password: string;
    profile: Profile;
}


export interface TLoginInfo {
    email: string;
    password: string;
}

