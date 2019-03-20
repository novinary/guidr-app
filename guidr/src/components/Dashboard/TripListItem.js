import React from 'react';

const TripListItem =
    ({ title,
        date,
        location,
        duration,
        type,
        profOrPlea,
        description }) => (
            <div>
                <h3>{title}</h3>
                <p>{date}</p>
                <p>{location}</p>
                <p>{duration}</p>
                <p>{type}</p>
                <p>{profOrPlea}</p>
                <p>{description}</p>
            </div>
        );

export default TripListItem;
