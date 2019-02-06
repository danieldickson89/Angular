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
    id: number,
    url: string,
    description: string
}