import React from 'react';
import { connect } from 'react-redux';
import TripForm from './TripForm';

const EditTrip = (props) => {
    console.log(props);
    return (
        <div>
            <TripForm
            trip={props.trip} // populate existing data in the form
             onSubmit={(trip) => {
                 console.log('updated', trip)
             }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        trip: state.trips.find((trip) => trip.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditTrip);
