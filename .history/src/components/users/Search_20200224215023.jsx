import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <form className="form" action="">
                    <input type="text" name="text" placeholder="Search Users..."/>
                    <input type="submit" name="Search" className="btn " />
                </form>
                
            </div>
        )
    }
}

export default Search
