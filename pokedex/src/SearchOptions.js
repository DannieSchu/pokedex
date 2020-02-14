import React, { Component } from 'react';

export default class SearchOptions extends Component {
    // see if this component has been loaded on parent (e.g., App.js), and if it has, run this code
    componentDidMount() {
        // get current page number (call function on constructor) on load and on hashchange
        this.getAndSetPageNum();

        window.addEventListener('hashchange', () => this.getAndSetPageNum()
        )
    }
    // initialize state of checked radio boxes and search input
    
    // function: use query params to get and update state
    updateControls() {
        // get rid of the first character of the hash (#)
        const queryString = window.location.hash.slice(1);
        // return URL as string 
        const searchParams = new URLSearchParams(queryString);
        // get "type" from search params
        const type = searchParams.get("type");
        // get "type" from search params
        const search = searchParams.get("search") || "";
        // set new state of page (initialized above by constructor): search key should equal search query
        this.setState({ 
            searchInput: search,
            checkedRadio: type 
        });
    }
    // handle form submission
        // get form from DOM
        // prevent default behavior
        // create new formdata object
        // get rid of the first character of the hash (#)
        // return URL as string 
        // set search params using form input: type, search, and default page (1)
        // set the hash to the stringified URL
    render() {
        return(
            // form
        )
    }
}