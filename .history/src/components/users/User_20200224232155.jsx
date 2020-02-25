import React, { Component } from 'react'

export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.par)
    }
    render() {
        return (
            <div>
                USER
            </div>
        )
    }
}

export default User
