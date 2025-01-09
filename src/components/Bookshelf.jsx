import React, { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const handleInputChange = e => setNewBook({ ...newBook, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({
            title: '',
            author: '',
        });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input onChange={handleInputChange} type="text" id="title" name="title" value={newBook.title} />

                    <label htmlFor="author">author</label>
                    <input onChange={handleInputChange} type="text" id="author" name="author" value={newBook.author} />

                    <button type="submit">Add New Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map(book => (
                    <div key={book.title} className="bookCard">
                        <h2>{book.title}</h2>
                        <p>By {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;