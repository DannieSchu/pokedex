import React, { Component } from 'react'
import TypesMenu from './TypesMenu.js'
import ShapesMenu from './ShapesMenu.js'


export default class SearchOptions extends Component {
    // see if this component has been loaded on parent (e.g., App.js), and if it has, run this code
    async componentDidMount() {
        // get current page number (call function on constructor) on load and on hashchange
        this.updateControls();
        window.addEventListener('hashchange', this.updateControls());
    }

    state = {
        searchInput: '',
        typesInput: '',
        shapesInput: ''
    }

    // use query params to get and update state
    updateControls() {
        // get rid of the first character of the hash (#)
        const queryString = window.location.hash.slice(1);
        // return URL as string 
        const searchParams = new URLSearchParams(queryString);
        // update state
        this.setState({
            searchInput: searchParams.get('pokemon') || '',
            dropdownInput: searchParams.get('type'),
            shapesInput: searchParams.get('shape')
        })
    }

         // handle form submission
    processForm(event) {
        // prevent default behavior
        event.preventDefault();
        // get form from DOM
        const form = document.querySelector('form');
        // create new formdata object
        const formData = new FormData(form);
        // get rid of the first character of the hash (#)
        const queryString = window.location.hash.slice(1);
        // return URL as string 
        const searchParams = new URLSearchParams(queryString);
        // set search params using form input
        searchParams.set('type', formData.get('type'));
        searchParams.set('shape', formData.get('shape'));
        searchParams.set('pokemon', formData.get('search'));
        searchParams.set('page', 1);

        if (searchParams.get('type') === 'all') {
            searchParams.delete('type');
        }
        if (searchParams.get('shape') === 'all') {
            searchParams.delete('shape');
        }

        // set the hash to the stringified URL
        window.location.hash = searchParams.toString();
    }

    render() {
        const handleChange = event => {
            this.setState({
                input: event.target.value
            })
            }
        return (
            <form className = "options" onSubmit={this.processForm}>
                <div className ="selection-container">
                    <TypesMenu handleChange = {handleChange} />
                    <ShapesMenu handleChange = {handleChange} />
                    <label>
                        <input 
                            id="search"
                            name="search"
                            placeholder="Search for your favorite Pokemon"
                            onChange = {event => this.setState({ searchInput: event.target.value })}
                            value = {this.state.searchInput}
                            />
                    </label>
                </div>
                <div className ="button-div">
                    <button className="search">Search</button>
                </div>
            </form>
        )
    }
}
