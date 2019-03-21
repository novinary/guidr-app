import React from 'react';
import { Link } from 'react-router-dom';

const TripListItem =
    ({
        id,
        title,
        date,
        location,
        duration,
        type,
        profOrPlea,
        description }) => (
            <div>
                 <Link to={`/editTrip/${id}`}>
                <h3>{title}</h3>   {/*use template string and interpolate id value */}
                </Link>
                <p>{location}</p>
                <p>{duration}</p>
                <p>{type}</p>
                <p>{profOrPlea}</p>
                <p>{description}</p>
            </div>
        );

export default TripListItem;
