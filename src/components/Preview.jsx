import React from 'react';

import './Preview.scss';

const Preview = props => {
  const shortenString = (string, maxChars) => {
    return string.length <= maxChars ? string : string.slice(0, maxChars).trim().concat('...');
  }

	return (
		<article className="preview-card">
			<img
				className="preview-cover"
				src={props.image_url}
				alt={props.name}
				onClick={props.onClick}
			></img>
			<div className="preview-info">
				<h3>{props.name}</h3>
				<p>{shortenString(props.description, 54)}</p>
			</div>
		</article>
	);
};

export default Preview;
