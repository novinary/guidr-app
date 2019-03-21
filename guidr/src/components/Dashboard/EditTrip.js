import React from 'react';
import { connect } from 'react-redux';
import TripForm from './TripForm';
import { editTrip, removeTrip } from '../../actions/trips'

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

            <button onClick={() => {
                props.dispatch(removeTrip({ id: props.trip.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        trip: state.trips.find((trip) => trip.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditTrip);
