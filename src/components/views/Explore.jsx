import React from 'react';
import PreviewsList from '../PreviewsList';
import { useParams, Link } from 'react-router-dom';

const ExploreEvents = props => {
	let { id } = useParams();
	return (
		<main>
			<header>
				<h1 className="title">
					{id === 'events' ? 'Explore Events' : 'Explore Talents'}
				</h1>
				<section className="nav">
					<button onClick={() => alert("filter logic by user's location")}>
						Location
					</button>
					<button onClick={() => alert('filter logic by genre')}>Genre</button>
					<Link to={`/create/${id === 'events' ? 'event' : 'talent'}`}>
						<button>Create</button>
					</Link>
				</section>
			</header>
			<hr />
			{id === 'events' && (
				<PreviewsList array={props.events} resource="events" />
			)}
			{id === 'talents' && (
				<PreviewsList array={props.talents} resource="talents" />
			)}
		</main>
	);
};

export default ExploreEvents;
