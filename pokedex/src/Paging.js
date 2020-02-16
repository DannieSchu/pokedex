import React, { Component } from 'react'

export default class Paging extends Component {
     //initialize local state
     state = { page: 1 };

     // see if this component has been loaded on parent (e.g., App.js), and if it has, run this code
     componentDidMount() {
         // get current page number (call function on constructor) on load and on hashchange
         this.updateControls();
         window.addEventListener('hashchange', () => this.updateControls()
         )
     }
 
     // function: update page number by an increment (by storing page # in URL hash)
     updatePage(increment) {
         // get rid of the first character of the hash (#)
         const queryString = window.location.hash.slice(1);
         // turn search params into string of key/value pairs (URLSearchParams returns URL input as string)
         const searchParams = new URLSearchParams(queryString);
         // set "page" key with value of this.state.page + increment (increment passed into function as argument)
         searchParams.set('page', this.state.page + increment);
         // change window location by assigning hash to string of incremented search params
         window.location.hash = searchParams.toString();
     }
 
     // function: get current page number from URL hash and set new state
     updateControls() {
         // get rid of the first character of the hash (#)
         const queryString = window.location.hash.slice(1);
         // return URL as string 
         const searchParams = new URLSearchParams(queryString);
         // store page number state
         let nextPageNum = this.state.page;
         // get value associated with "page" key from the stringified search params and turn into number
         const parsedPage = Number(searchParams.get('page'));
         // if there is no page number in search params, next page number should be 1 (first page); otherwise, use the value from the query params
         if(isNaN(parsedPage)) {
             nextPageNum = 1;
         } else {
             nextPageNum = parsedPage;
         }
         // set new state of page (initialized above by constructor): page key should equal page number 
         this.setState({ page: nextPageNum });
     }
     
     render() {
          // const { page } = this.state;

        // number of pokemon per page
        const perPage = 20;

        // pokeData should equal this.props
        // CHANGED TO pokemonCount FROM pokedeck
        const { pokemonCount } = this.props; 
        // get rid of the first character of the hash (#)
        const queryString = window.location.hash.slice(1);
        // turn URL into string
        const searchParams = new URLSearchParams(queryString);
        // get value associated with "page" key from the stringified search params and turn into number
        const parsedPage = parseInt(searchParams.get('page'))
        // if there is no page number in search params, pageToUse should be 1 (first page); otherwise, use the value from the query params
        let nextPageNum;
        if(isNaN(parsedPage)) {
            nextPageNum = 1;
        } else {
            nextPageNum = parsedPage;
        }
        // if there is nothing in pokeData (i.e., no results), return message
        if(!pokemonCount) {
            return <p className = 'results'>Your search yielded no results.</p>
        }

        // determine the last page with Math.ceil
        const lastPage = Math.ceil(pokemonCount / perPage);
        
        return (
            // JSX buttons that update the page on click
            <p className = "paging">
                <button 
                    className = "prev"
                    onClick = {() => this.updatePage(-1)}
                    // disable button on first page
                    disabled = {nextPageNum === 1 ? true : "" }
                    type = "button"
                    >
                    ◀</button>
                <span className="current-page">Page {parsedPage} of {lastPage}</span>
                <button
                    className = "next"
                    onClick = {() => this.updatePage(1)}
                    disabled = {nextPageNum === lastPage ? true : "" }
                    type = "button"
                    >
                    ▶</button>
            </p>
        )
    }
}
