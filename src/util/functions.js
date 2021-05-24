export const fetchLibraryBook = async (id) => {
    const response = await fetch(`http://localhost:5000/myLibrary/${id}`);
    const data = await response.json();
    
    return data;
};

export const fetchBook = async (id) => {
    const res = await fetch(`http://localhost:5000/allBooks/${id}`);
    const data = await res.json();

    return data;
};

export const fetchCategory = async (id) => {
    const res = await fetch(`http://localhost:5000/category/${id}`);
    const data = await res.json();
    return data.name;
};

export async function postBookToLibrary(id) {
    const bookToAdd = { id: id, isFinished: false };

    const res = await fetch(`http://localhost:5000/myLibrary`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(bookToAdd),
    });

    const jsonData = await res.json();
    return jsonData;
}

export async function updateLibraryBook(data) {
    const bookToToggle = await fetchLibraryBook(data);
    const updatedBook = { ...bookToToggle, isFinished: !bookToToggle.isFinished };

    const res = await fetch(`http://localhost:5000/myLibrary/${data}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
    });

    const updatedData = await res.json();
    return updatedData;
}

export const fetchBooks = async () => {
    const response = await fetch('http://localhost:5000/allBooks');
    const data = await response.json();
    return data;
};

export const fetchLibraryBooks = async () => {
    const response = await fetch('http://localhost:5000/myLibrary');
    const data = await response.json();
    const books = [];
    for (const book of data) {
        let newBook = await fetchBook(book.id);
        newBook = { ...newBook, isFinished: book.isFinished };
        books.push(newBook);
    }

    return books;
};

export const fetchCategories = async () => {
    const response = await fetch('http://localhost:5000/category');
    const data = await response.json();
    return data;
};
