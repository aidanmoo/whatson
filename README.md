# JavaScript Project

## Built with
- Javascript
- React
- Firebase Usermanagement
- Firebase Firestore DB
- Material UI
- API from https://www.themoviedb.org/

## Complexities
- Handling user login (FirebaseAuth)
- Handling user permissions (FirebaseAuth)
- Creating DB collection of 'watchlist' using Firestore
- Adding / removing items from users 'watchlist'
- Hook created for API requests (takes multiple arguements and returns the data, status, error handling)
- Hooks created for Firestore interactions
- Routing single page site except for movie display pages
- useParams to identify ID of the movie from the path
- useState / useEffect - passing state to different components
- Search results page using query
- history
- reusable grid layout (home / search results / recommended)
- Pagination for results (using Material API)
- error handline on large API queries that have nested arrays (that might not always show)
- menu items that display based on state
- multiple api request on same page (different sources)
- persistent menu filters with some beint Material Multiple select (genre) and some being single (rating)

## Future features
- fix layout / responsiveness
- Add serach by date range
- email alertis if they become available in to stream Australia (cron job)
