import React, {Component} from 'react';

//Function Component
/*
const SearchBar = () => {
    return <input/>
};
*/

//Class Based Components: 

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};            // State is used to record and react to user events - Only for class based components  
    }

    render() {
        return (
        <div className='search-bar'>
            <input 
                value =  {this.state.term}   //Controlled Component
                onChange={event => this.onInputChange(event.target.value)}/>
        </div>
    );
    }

/*Handling user events in React: 
    1- Declare an event handler
    2- Pass this event handler to the element that we want to monitor. 
*/
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

/* Also could be written as:
class SearchBar extends Component{
    render() {
        return <input onChange={this.onInputChange}/>
    }
    onInputChange(event){
        console.log(event.target.value);
    }
}
*/

export default SearchBar;

