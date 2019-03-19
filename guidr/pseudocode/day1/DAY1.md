Step 1 ** Start with a Mock **
- I already have a JSON API that return some data from the UI and Back End Developer: https://guidr2.herokuapp.com/
- more details on the API are availbale here: https://github.com/guidr-app-lion-team/guidr-server/blob/master/README.md#api-endpoints

Break the UI into a Component Hierarchy (little logical pieces)
- <GuidrApp />(Brown) - contains the entirety of the example which will render all the child Components
    -  <NavLink />(Purple) - contains Profile and Logout Page links
        - <ProfilePage /> - contains Home, AddTrip and Logout links
            - <Home /> - goes to home page
            - <AddTrip />(Blue) - contains a form where the user will be able to submit a new a adventure
            - <Logout /> - be able to logout
- <FilterTripType />(Blue) - receives user input
    - <TripTable />(Green) - displays and filters the data collection based on user input
![Breakdown of GuidrApp homepage](https://github.com/novinary/guidr-app/blob/novina-pun/guidr/pseudocode/day1/Homepage.png)

