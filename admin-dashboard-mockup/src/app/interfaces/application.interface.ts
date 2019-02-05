export interface Application {
    name: string,
    code: string,
    categories: Category[]
}

export interface Category {
    id: number,
    category: string,
    description: string,
    links: Link[]
}

export interface Link {
    url: string,
    description: string
}