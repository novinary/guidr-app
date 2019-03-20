import React from "react";
import { connect } from "react-redux";
import TripListItem from "./TripListItem";

const TripList = props => (
  <div>
    <h1>Trip List</h1>
    {props.trips.map(trip => {
      return <TripListItem key={trip.id} {...trip} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};

export default connect(mapStateToProps)(TripList);
