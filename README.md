# Travel Advisor App

This project is a Travel Advisor application built using React. It utilizes the Google Maps API for location services and the Travel Advisor API from RapidAPI for retrieving information about places.

## Features

- **Map View**: Displays a map using Google Maps API where users can explore different locations.
- **Places Search**: Allows users to search for places like restaurants, hotels, attractions, etc.
- **Weather Information**: Provides weather data for the current location.
- **Filtering**: Users can filter places based on their ratings.

## Technologies Used

- React
- Material-UI
- Google Maps API
- Travel Advisor API from RapidAPI

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone <repository-url>
cd travel-advisor-app
```

2. Install dependencies:

```
npm install
```


3. Set up environment variables:

Create a `.env` file in the root of the project and add the following:

```
REACT_APP_GOOGLE_MAPS_API_KEY=<your-google-maps-api-key>
REACT_APP_TRAVEL_ADVISOR_API_KEY=<your-rapidapi-key>
```


Replace `<your-google-maps-api-key>` with your actual Google Maps API key and `<your-rapidapi-key>` with your RapidAPI key for the Travel Advisor API.

4. Run the app:

```
npm start
```


This will start the development server and open the app in your default browser.

## App Structure

- **`App.js`**: Main component that integrates all features including maps, places list, and weather data.
- **`components/Header/Header.js`**: Header component with search and autocomplete functionality.
- **`components/List/List.js`**: Component to display a list of places with filtering options.
- **`components/Map/Map.js`**: Component to display the map with markers and weather information.

## Future Improvements

- Implement user authentication and save favorite places.
- Enhance UI/UX with more interactive features.
- Optimize performance by caching API responses and minimizing re-renders.

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, feel free to submit a pull request.
