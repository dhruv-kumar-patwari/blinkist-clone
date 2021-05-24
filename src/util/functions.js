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