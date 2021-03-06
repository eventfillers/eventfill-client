import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../forms/EventForm';
import TalentForm from '../forms/TalentForm';
import { useCookies } from 'react-cookie';

import './Create.scss';

const EVENT_ASIDE = (
	<>
		<h1>Let's bring your event to a wider audience.</h1>
		<p>
			Just fill out the form and you'll be gathering attendees and talents in no
			time!
		</p>
	</>
);

const TALENT_ASIDE = (
	<>
		<h1>Let's put your skills on the map.</h1>
		<p>Just fill out the form and event planners can start discovering you!</p>
	</>
);

const Create = ({ locations, genres, openModal }) => {
	let { id } = useParams();
	const [cookies] = useCookies();
	const user = parseInt(cookies.user_id);

	useEffect(() => {
		document.title = 'EVENTFILL - Creation';
		return () => {
			document.title = 'EVENTFILL';
		};
	}, []);
	return (
		<main className="create-panel">
			<aside className="create-aside">
				{id === 'event' && EVENT_ASIDE}
				{id === 'talent' && TALENT_ASIDE}
			</aside>
			<section className="create-form">
				{isNaN(user) && (
					<article className="err">
						<p className="err-login">
							Please login to create{' '}
							{id === 'event' ? 'an event' : 'a talent profile'}
						</p>
					</article>
				)}
				{!isNaN(user) && id === 'event' && (
					<EventForm
						locations={locations}
						genres={genres}
						openModal={openModal}
					/>
				)}
				{!isNaN(user) && id === 'talent' && (
					<TalentForm
						locations={locations}
						genres={genres}
						openModal={openModal}
					/>
				)}
			</section>
		</main>
	);
};

export default Create;
