import React, {useState} from "react";

function SearchBar () {

    return (
        <form>
            <lable>
                <input type="text" placeholder="Enter A Song, Album, or Artist" />
                <button type="submit">SEARCH</button>
            </lable>
        </form>
    );
};

export default SearchBar;