import React from 'react';
import { Container } from 'elemental';

var Footer = React.createClass({
	displayName: 'Footer',
	propTypes: {
		appversion: React.PropTypes.string,
		backUrl: React.PropTypes.string,
		brand: React.PropTypes.string,
		user: React.PropTypes.object,
		User: React.PropTypes.object, // eslint-disable-line react/jsx-sort-prop-types
		version: React.PropTypes.string,
	},
	renderUser () {
		const { User, user } = this.props;
		if (!User || !user) return null;

		return (
			<span>
				<span>Signed in as </span>
				<a href={`${Keystone.adminPath}/${User.path}/${user.id}`} tabIndex="-1" className="keystone-footer__link">
					{User.getDocumentName(user)}
				</a>
				<span>.</span>
			</span>
		);
	},
	render () {
		const { backUrl, brand, appversion, version } = this.props;

		return (
			<footer>
			</footer>
		);
	},
});

module.exports = Footer;