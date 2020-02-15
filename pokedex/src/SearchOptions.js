import React, { Component } from 'react';

export default class SearchOptions extends Component {
    // see if this component has been loaded on parent (e.g., App.js), and if it has, run this code
    componentDidMount() {
        // get current page number (call function on constructor) on load and on hashchange
        this.updateControls();

        window.addEventListener('hashchange', () => this.updateControls()
        )
    }

    // initialize state of checked radio boxes and search input
    state = {
        searchInput: '',
        checkedRadio: [{name: 'type'}]
    }
    
    // function: use query params to get and update state
    updateControls() {
        // get rid of the first character of the hash (#)
        const queryString = window.location.hash.slice(1);
        // return URL as string 
        const searchParams = new URLSearchParams(queryString);
        // get 'type' from search params
        const type = searchParams.get('type');
        // get 'type' from search params
        const search = searchParams.get('search') || '';
        // set new state of page (initialized above by constructor): search key should equal search query
        this.setState({ 
            searchInput: search,
            checkedRadio: type 
        });
    }

    // handle form submission
    processForm = event => {
        // get form from DOM
        const form = document.querySelector('form');
        // prevent default behavior
        event.preventDefault();
        // create new formdata object
        const formData = new FormData(form);
        // get rid of the first character of the hash (#)
        const queryString = window.location.hash.slice(1);
        // return URL as string 
        const searchParams = new URLSearchParams(queryString);
        // set search params using form input: type, search, and default page (1)
        searchParams.set('type', formData.get('type'))
        searchParams.set('search', formData.get('search'))
        searchParams.set('page', 1)
        // set the hash to the stringified URL
        window.location.hash = searchParams.toString();
    }

    render() {
        return(
            <form className = "options" onSubmit={this.processForm}>
                <label for="search">Search</label>
                <p>
                    <input 
                        id="search"
                        name="search"
                        // when user interacts with this input, use a callback to update state: searchInput should equal value of textbox
                        onChange = {e => this.setState({ searchInput: e.target.value })}
                        // set value of input to the value of the state set above 
                        value = {this.state.searchInput}
                    />
                </p>
                <fieldset>
                    <label>
                        <input 
                            type="radio"
                            name="type"
                            value="type"
                            // when user interacts with this input, set state of this input
                            onClick = {() => this.setState({ checkedRadio: "type" })}
                            // determine which radio button is checked
                            checked = {this.state.checkedRadio === "type" }
                        />
                        Type
                    </label>
                </fieldset>
                <p>
                    <button>Search</button>
                </p>
            </form>
        )
    }
}