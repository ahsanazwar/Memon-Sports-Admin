import React from 'react';
import { withTheme } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

// get our fontawesome imports
import {
	faHome,
	faUser,
	faUserEdit,
	faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function MyProfileSidebar(props) {
	return (
		<div className="my-profile-sidebar">
			<div className="sidebar-profile-info">
				<div className="sidebar-dp">
					<img src={props.image} alt="Awesome Footer Logo" />
				</div>
				<h2>Hi {props.userName}</h2>
				<span className="credit-sp">Credit : $0.00.00</span>
				<Link to="/card-detail" className="credit-btn">
					Add Credit
				</Link>
			</div>
			<ul className="sidebar-navigation">
				<li>
					<NavLink activeClassName="active" to="dashboard">
						<FontAwesomeIcon icon={faHome} /> Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/my-flower">
						<FontAwesomeIcon icon={faStar} /> My Flower
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="my-profile">
						<FontAwesomeIcon icon={faUser} /> My Profile
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="edit-profile">
						<FontAwesomeIcon icon={faUserEdit} /> Edit Profile
					</NavLink>
				</li>
				{/* <li>
					<NavLink activeClassName="active" to="/transection">
						<FontAwesomeIcon icon={faChartBar} /> Transaction
					</NavLink>
				</li> */}
			</ul>
		</div>
	);
}

export default withTheme(MyProfileSidebar);
