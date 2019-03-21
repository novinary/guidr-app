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

## ** Step 4 Create Trip Add/Edit Form **

** Add Form **

- Create a new Component class called TripForm - Done
- Render TripForm into AddTrip - Done
- Create a Form with inputs and submit button - Done
- Use local component state to track the changes to
  keep track of the changes to every single input. (When a fom is submitted by a user,
  it is sent off to Redux to either edit the existing trip or create the new one. - Done
- Set the value for the inputs to equal to current state value (this will create READ ONLY value) - Done
- We want the user to able to change the value so setup OnChange - Done
- Check in React dev tool if the binding is working - Done
- setup onSubmit handler for the form, use the onSubmit to my prop - Done
- Make Title and Location mandatory fields. Throw an error message if they're left empty - Done

** Edit Form **
Very similar to TripForm and should require small changes. TripForm has empty default values, EditForm should get the current values.
- Make change to the TripListItem component
- Link over to the page and add correct id
    - import Link from react-router-dom - Done
    - wrap h3 into Link - Done
Be able to get the entire Trip objects
    - Connect EditTrip component to redux store - Done
    Be able to search the trips array for the trip with an ID that matches this one.
        - This means I need to import Connect to grab that from react-redux - Done
- Render TripForm in the EditForm
    - Switch to EditForm when clicking on an exisiting trip - Done
    - Populate data in the form with their existing values by taking a trip and passing it down as props - Done
    - Define state inside of a constructor function to access the props - Done
    - Use series of ternator operators, for example for title, check if props.title exists then start 
    the title off the same value as start off an empty string if not-existent - Done
    - Do the same for other props - Done