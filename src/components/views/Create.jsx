import React from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../forms/EventForm';
import TalentForm from '../forms/TalentForm';
import { EVENTASIDE, TALENTASIDE } from '../../CONST';

const Create = ({ locations, genres }) => {
	let { id } = useParams();
	return (
		<main>
			<aside className="create-aside">
				{id === 'event' && EVENTASIDE}
				{id === 'talent' && TALENTASIDE}
			</aside>
			<section className="create-form">
				{id === 'event' && <EventForm locations={locations} genres={genres} />}
				{id === 'talent' && (
					<TalentForm locations={locations} genres={genres} />
				)}
			</section>
		</main>
	);
};

export default Create;
