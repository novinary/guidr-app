## ** Step 1 Connect Store and Component with React-Redux **
- Install react-redux library - Done
- Use Provider component once at the root of Application (index.js).
This let us define the store that we want to provide to all of our components - Done
- Create new hoc using Connect for every single component that needs to connect 
to redux store (TripList.js). We call connect and define things to get off of the store(mapStateToProps) and define the component to create the connected version(TripList). The brand
new component is just our TripList component wiht the props from the store- Done

## ** Step 2 Render Individual Trips **
- Export a stateless functional component (TripListItem) - Done
- title, date, location, duration, type, profOrPlea, description

## ** Step 3 Work on the Remove button **
- Add a remove button in TripListItem.js - Done
- Remove button should dispatch an action when clicked
    - Import removeTrip action creator - Done
    - Allow TripListItem to access dispatch then wire up on click to get it working - Done