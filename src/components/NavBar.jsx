import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
import { useCookies } from 'react-cookie';

const LoginDown = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['user_id']);

	return (
		<ul className="dropdown dropdown__login">
			<li onClick={() => setCookie('user_id', 1, { path: '/' })}>User 1</li>
			<li onClick={() => setCookie('user_id', 2, { path: '/' })}>User 2</li>
			<li onClick={() => setCookie('user_id', 3, { path: '/' })}>User 3</li>
			<li onClick={() => setCookie('user_id', 4, { path: '/' })}>User 4</li>
			<li onClick={() => setCookie('user_id', 5, { path: '/' })}>User 5</li>

			<li onClick={() => removeCookie('user_id')}>Logout</li>
		</ul>
	);
};

const CreateDown = () => {
	return (
		<ul className="dropdown dropdown__create">
			<Link to="/create/event">
				New Event
			</Link>
			<Link to="/create/talent">
				New Talent
			</Link>
		</ul>
	);
};

const NavBar = ({ openModal }) => {
  const [cookies] = useCookies();
	const [openCreate, setopenCreate] = useState(false);
	const [openLogin, setopenLogin] = useState(false);

	const closeDropDown = () => {
		if (openCreate) {
      setopenCreate(false);
    }
		if (openLogin) {
			setopenLogin(false);
		}
  };
  
	return (
		<>
			{(openCreate || openLogin) && (
				<div className="drop-down__overlay" onClick={closeDropDown} />
			)}
			<nav onClick={closeDropDown}>
				<Link className="router-link" to="/">
					<section className="logo">EVENTFILL</section>
				</Link>
				<button onClick={() => openModal(<Calendar />)}>Calendar Modal</button>
				<ul className="links">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/explore/events">
						<li>Events</li>
					</Link>
					<Link to="/explore/talents">
						<li>Talents</li>
					</Link>
					<li
						className="nav-create"
						onClick={() => {
							setopenCreate(!openCreate);
						}}
					>
						Create
					</li>
					{openCreate && <CreateDown />}
					<Link to="/messages">
						<li>My Messages</li>
					</Link>

					<li
						onClick={() => {
							setopenLogin(!openLogin);
						}}
					>
						{Object.keys(cookies).length === 0 ? 'Login' : 'Logout'}
					</li>
					{openLogin && <LoginDown />}
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
