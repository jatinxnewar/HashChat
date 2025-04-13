# Chat Application

This is a dark-themed chat application built with React. The application features user authentication and encrypted messaging to ensure privacy and security.

## Features

- Dark theme for a modern look and feel.
- User login functionality.
- Encrypted chat messages for secure communication.
- Responsive design for various devices.

## Project Structure

```
HC
├── src
│   ├── components
│   │   ├── Login.tsx          # Login form component
│   │   ├── Chat.tsx           # Chat interface component
│   │   └── common
│   │       └── ThemeProvider.tsx # Theme provider for dark mode
│   ├── styles
│   │   ├── Login.module.css    # Styles for Login component
│   │   └── Chat.module.css     # Styles for Chat component
│   ├── App.tsx                 # Main application component
│   └── index.tsx               # Entry point of the application
├── public
│   ├── index.html              # Main HTML file
│   └── favicon.ico             # Favicon for the application
├── package.json                # NPM configuration file
├── tsconfig.json               # TypeScript configuration file
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd HC
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.