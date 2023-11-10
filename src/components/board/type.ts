export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
};

export type Task = {
    id: Id;
    columnId: Id;
    title: string;
    category: {
        content: string;
        background: string;
    };
    description: string;
    dueDate: string;
};