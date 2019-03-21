import React from 'react';
import { connect } from 'react-redux';

const EditTrip = (props) => {
    console.log(props);
    return (
        <div>
            This is from my EditTrip with id of {props.match.params.id}
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        trip: state.trips.find((trip) => trip.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditTrip);
