import React, { Component } from 'react'

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.params.login)
	}
	render() {
		const {} = this.props.user
		return (
			<div>
				USER
            </div>
		)
	}
}

export default User
