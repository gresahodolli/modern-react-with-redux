//I HAVE TO FIX THE ERROR FIRST
import { useState, useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';


function App() {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, []);
    
    return (
        <div className='app'>
        <h1>Reading List</h1>
        <BookCreate />
        <BookList />
    </div>    
    );
}

export default App
