export interface Company{
    id: number;
    name: string;
    description: string;
    city: string;
    address: string;
}

export interface Vacancy{
    id: number;
    name: string;
    description: string;
    salary: string;
    company: string;
    raiting: number;
}

export interface registr_login{
    nickname: string;
    mail: string;
    password: string;
}

