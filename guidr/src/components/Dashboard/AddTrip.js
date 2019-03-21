import React from 'react'
import TripForm from './TripForm'
import { connect } from 'react-redux';
import { addTrip } from '../../actions/trips'

const AddTrip = (props) => (
    <div>
        <h1>Add Trip</h1>
        <TripForm 
        onSubmit={(trip) => {
            props.dispatch(addTrip(trip));
            props.history.push('/');
        }}
        />
    </div>
);

export default connect()(AddTrip);