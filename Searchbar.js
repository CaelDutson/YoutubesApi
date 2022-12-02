import React from "react"; 

class SearchBar extends React.Component { 
    handleChange = (event) => { 
        this.setState({ 
            term: event.target.value
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault(); 
        this.props.handleFormSubmit(this.state.term);
    } 

    render() { 
        return ( 
            <div> 
                <form onSubmit={this.handleSubmit}> 
                    <div class="bruh">
                    <div id="input" class="form-outline w-50"> 
                        <input aria-label="Search" class="form-control" placeholder="Search" type="text" onChange={this.handleChange}></input>
                    </div>  
                    </div>
                </form>
            </div>
        )
    }
} 

export default SearchBar