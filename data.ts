interface post<T> {
    name: T;
    title: T;
}

class Post implements post<string>{
    name: string;
    title: string;
    constructor(name: string, title: string) {
        this.name = name;
        this.title = title;
	}
}

const reduxEntry = new Post('getting-started-with-redux', 'Redux 入门');

export const getPostById = () => reduxEntry