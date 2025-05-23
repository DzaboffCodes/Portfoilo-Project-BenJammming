import React from "react";

function SearchBar () {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        margin: '30px 0'
    };

    const inputStyle = {
        padding: '10px',
        width: '250px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1em'
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#1db954',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1em',
        cursor: 'pointer'
    };

    return (
        <form style={formStyle}>
            <input type="text" placeholder="Enter A Song, Album, or Artist" style={inputStyle} />
            <button type="submit" style={buttonStyle}>SEARCH</button>
        </form>
    );
};

export default SearchBar;