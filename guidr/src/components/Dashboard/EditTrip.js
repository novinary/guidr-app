import React from 'react';
import { connect } from 'react-redux';
import TripForm from './TripForm';
import { editTrip } from '../../actions/trips'

const EditTrip = (props) => {
    return (
        <div>
            <TripForm
            trip={props.trip} // populate existing data in the form
             onSubmit={(trip) => {
                 props.dispatch(editTrip(props.trip.id, trip));
                 props.history.push('/');
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
