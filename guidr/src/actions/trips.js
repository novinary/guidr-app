import uuid from 'uuid';

// ADD_TRIP
export const addTrip = (
  {
    title = '',
    date = 0,
    location = '',
    duration = 0,
    type = '',
    profOrPlea = '',
    description = ''
  } = {}
) => ({
  type: 'ADD_TRIP',
  trip: {
    id: uuid(),
    title,
    date,
    location,
    duration,
    type,
    profOrPlea,
    description
  }
});

// REMOVE_TRIP
export const removeTrip = ({ id } = {}) => ({
  type: 'REMOVE_TRIP',
  id
});

// EDIT_Trip
export const editTrip = (id, updates) => ({
  type: 'EDIT_TRIP',
  id,
  updates
});
