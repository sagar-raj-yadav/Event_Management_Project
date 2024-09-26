

# Event Booking App
A simple mobile application built with React Native that allows users to browse events, 
view details, and book tickets. This project showcases an understanding of React Native,
API integration, state management, UI/UX design, and best practices in mobile development.

## Features
- **Home Screen**: Displays a list of upcoming events with a search bar to filter events by name.
- **Event Detail Screen**: Shows detailed information about the event, including an image, description, and booking option.
- **Booking Screen**: Allows users to book tickets for an event by entering their name, email, and number of tickets. Booking confirmation includes the current date.
- **API Integration**: Uses a mock API to fetch events asynchronously.
- **HOOKS **: Managed through React's `useState` and `useEffect` hooks.
- **AsyncStorage**: Saves booking details locally using AsyncStorage.
- **Search Feature**: Users can filter the events by name on the home screen.
- **Error Handling**: Handles API errors gracefully and provides user feedback.

## Tech Stack
- **React Native**: Core framework for building mobile applications.
- **Expo**: Development platform for easier setup and faster development.
- **React Navigation**: For handling screen navigation.
- **Axios**: For API calls and handling data requests.
- **AsyncStorage**: To persist booking information locally.
- **JavaScript/ES6**: Primary programming language used.

---

## Screens and Components
### 1. **HomeScreen**
- Displays a list of events fetched from a mock API.
- Includes a search bar to filter events by name.
- Each event item contains a thumbnail, title, date (current date), and location (static).
- Users can tap on an event to view its details on the `EventDetailScreen`.

### 2. **EventDetailScreen**
- Shows full details of the selected event.
- Displays a full-sized image, title, description, and a "Book Now" button.
- Clicking the "Book Now" button navigates to the `BookingScreen`.

### 3. **BookingScreen**
- Allows users to input their name, email, and the number of tickets.
- On confirmation, the booking details are saved locally using AsyncStorage.
- A confirmation message shows the current date and user-entered data.
- Simple form validation and error handling.

## Project Structure
/event-booking-app
│
├── /screens               # All screen components
│   ├── HomeScreen.js       # Home screen with event list and search feature
│   ├── EventDetailScreen.js# Event detail screen with "Book Now" option
│   └── BookingScreen.js    # Booking form for event registration
│
├── /navigation             # Navigation setup using React Navigation
│   └── StackNavigation.js  # Stack navigator for navigating between screens
│
├── App.js                  # Main app entry point, loads navigation
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```


## Installation and Setup
### Prerequisites
- [Node.js](https://nodejs.org/en/) and npm installed.
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally.

### Steps to Run the App
1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/event-booking-app.git
   cd event-booking-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Expo Development Server**:

   ```bash
   npm start
   ```

4. **Run the App**:
   - Scan the QR code with the Expo Go app on your smartphone.
   - Or, run it on an Android/iOS emulator using the appropriate commands:
     ```bash
     npm run android
   

### Mock API
The project uses the mock API [JSONPlaceholder](https://jsonplaceholder.typicode.com/photos) to fetch events. This API is integrated into the project to simulate event data. You can replace it with a real API by changing the API URL in `HomeScreen.js`.

---

## Usage Instructions

### Navigating the App
1. **Home Screen**: Browse events, search for specific events by name using the search bar.
2. **Event Detail Screen**: Tap any event to view detailed information, including an image, description, and a booking button.
3. **Booking Screen**: Enter your name, email, and the number of tickets you want to book. On submission, a confirmation message will appear with the current date.

### Persisting Booking Data
- The booking information is saved locally in AsyncStorage. You can later retrieve or modify this data as needed in future extensions of the app.

---

## Additional Features
- **Loading Indicator**: Displays a loading spinner while the events are being fetched from the API.
- **Error Handling**: If there is an issue fetching data, it handles the error and displays a fallback message.
- **Local Data Storage**: Uses AsyncStorage to persist booking data locally on the user's device.

---

## Customization
### Switching to a Real API
If you want to use a real event API:
1. Replace the mock API URL in `HomeScreen.js` with your real API endpoint.
2. Ensure the API structure matches the data fields (`thumbnailUrl`, `title`, etc.) or modify the code to fit your API's response.


