import React from 'react';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function UserMyProfileSection(props) {
	return (
		<div className="user-profile-section">
			<div className="pro-user-info">
				<div className="sidebar-dp">
					<img src={props.userImage} alt="Awesome Footer Logo" />
				</div>
				<h2>{props.userName}</h2>
				{/* <p className="pro-user-text">Username : ahsan-azwar</p> */}
				<span className="credit-sp">
					$
					{props.getBalanceData.available
						? props.getBalanceData.available[0].amount
						: ''}
				</span>
				{/* <a>Activate my account</a> */}
				<p className="gray-text">
					Email : <Link to="">{props.userEmail}</Link>
				</p>
				<p className="gray-text">
					DOB : {props.userDob.split('T').slice(0, -1).join(' ')}
				</p>
				<p className="gray-text">Age : {props.userAge}</p>
				<p className="gray-text">Occupation : {props.userOccupation}</p>
				<p className="gray-text">Phone Number : {props.userphoneNumber}</p>
				<button
					className="gray-text activate-btn"
					onClick={props.activateStripeLink}
				>
					Activate Your Account
				</button>
				<ul className="pro-edit-list">
					<li>
						<Link to="/edit-profile">
							<FontAwesomeIcon icon={faPen} /> Edit Profile
						</Link>
					</li>
					<li>
						<Link to="/change-password">
							<FontAwesomeIcon icon={faPen} /> Change Password
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default withTheme(UserMyProfileSection);
