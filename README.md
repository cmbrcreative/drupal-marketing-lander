# Logo Carousel

This project provides a customizable logo carousel component. You can easily modify the layout and content by editing the configuration files.

## Table of Contents

- [Setup](#setup)
- [Firebase Configuration](#firebase-configuration)
- [Customization](#customization)
  - [Constants](#constants)
  - [Layout](#layout)
- [Example](#example)

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/cmbrcreative/drupal-marketing-lander.git
   cd drupal-marketing-lander
   ```

2. Install dependencies:
   ```sh
   yarn
   ```

3. Start the development server:
   ```sh
   yarn start
   ```

## Firebase Configuration

This template uses Firebase for backend services. Follow these steps to add your Firebase configuration:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing project.
3. Add a new web app to your project.
4. Copy the Firebase configuration object from the Firebase Console and replace the template in `src/firebaseConfig.js` with it.
   ```javascript
   // src/firebaseConfig.js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   export default firebaseConfig;
   ```



## Customization

### Constants

Edit the `src/constants/carouselLogos.js` file to update the logos displayed in the carousel.

### Layout

The layout of the carousel can be customized by editing the `src/containers/LogoCarousel.jsx` file. Key sections are documented with comments to guide you through the customization process.

## Example

Here is an example of how to add a new logo to the carousel:

1. Open `src/constants/carouselLogos.js`.
2. Add your logo component to the `carouselLogos` array.
