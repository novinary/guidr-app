import React from 'react';
import { connect } from 'react-redux';

const TripList = (props) => (
  <div>
    <h1>Trip List</h1>
    {props.trips.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
  };
};

export default connect(mapStateToProps)(TripList);
