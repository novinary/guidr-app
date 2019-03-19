Step 1 
**Structure my React app using client side routing** 
Create AppRouter so that I am able to navigate between pages without going whole page refresh - Done

Step 2
Create new files for the components - Done 
Setup imports, component, default export - Done
Import into AppRouter so they can be used - Done
Create a separate component for Header - Done
Make editTrip link dynamic - Done

Step 3
** Start using Redux with React **  
Notes: Connect the components to the redux store so they can
read off of the store so they can fetch values from the store
and render those.
If someone interacts with the user interface maybe the a add a new trip or
change the filters 

- Create below action creators for trips
ADD_TRIP - Done
REMOVE_TRIP - Done
EDIT_TRIP - Done
Use uuid package to generate unique id for but later on it will come from the backend API - Done

- Create below action creators for filters
SET_TEXT_FILTER - Done
SORT_BY_DATE - Done
SET_UPLOAD_DATE - Done

- Create reducers for trips and filters - Done

- Create a store configuration - Done 

- Create a getVisibleTrips function - use built in methods like filter and sort to filter and sort trips data  - to do (part of stretch, might not work on this until mvp is done)



