import React from 'react';
import "./Explore.css";
import SearchIcon from "@material-ui/icons/Search"

function Explore() {
    return (
        <div className="explore">
            <div className="searchBar">
                <SearchIcon className="searchIcon"/>
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <h2>Bangladesh trends</h2>
            <ul>
                <li>
                    <h5>1. K-pop · Trending</h5>
                    <h3>#Jimin_FACE</h3>
                    <h5>467K Tweets</h5>
                </li>
                <li>
                    <h5>2. Trending</h5>
                    <h3>#HAPPY7thWITH_ASTRO</h3>
                    <h5>189K Tweets</h5>
                </li>
                <li>
                    <h5>3. Trending</h5>
                    <h3>#MultiversX</h3>
                    <h5>12.2K Tweets</h5>
                </li>
                <li>
                    <h5>4. Trending</h5>
                    <h3>#EGLD</h3>
                    <h5>4,731 Tweets</h5>
                </li>
                <li>
                    <h5>5. K-pop · Trending</h5>
                    <h3>FACE IS COMING</h3>
                    <h5>152K Tweets</h5>
                </li>
            </ul>

        </div>
    );
}

export default Explore;