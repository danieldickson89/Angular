export interface Application {
    name: string,
    code: string,
    categories: Category[]
}

export interface Category {
    category: string,
    description: string,
    links: Link[]
}

export interface Link {
    url: string,
    description: string
}