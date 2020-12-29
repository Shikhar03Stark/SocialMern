import React from 'react';
import './SmallBody.css';
import SearchBar from  './SearchBar';
import ViewList from  './ViewList'

const SmallBody = (props) => {
    return (
        <div className="SmallBody-outline">
            <SearchBar />
            <ViewList />
        </div>
    )
}

export default SmallBody;