import React, { Component } from 'react'

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.params.login)
	}
	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url, 
			followers,
			following,
			public
		} = this.props.user
		return (
			<div>
				USER
            </div>
		)
	}
}

export default User
