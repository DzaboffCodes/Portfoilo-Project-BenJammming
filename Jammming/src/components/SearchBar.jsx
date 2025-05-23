import React from "react";
import '../App.css'

function SearchBar () {

    return (
        <form className="form-style">
            <input type="text" placeholder="Enter A Song, Album, or Artist" className="input-style" />
            <button type="submit" className="button-style">SEARCH</button>
        </form>
    );
};

export default SearchBar;