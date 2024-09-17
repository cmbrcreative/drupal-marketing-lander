import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BackgroundBlur from "./assets/images/BackgroundBlur.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { SquircleNoScript } from "@squircle-js/react";


const firebaseConfig = {
  apiKey: "AIzaSyCNY0liZzmLa1tH6J8NeGGotaMvS_G16y8",
  authDomain: "drupal-marketing.firebaseapp.com",
  projectId: "drupal-marketing",
  storageBucket: "drupal-marketing.appspot.com",
  messagingSenderId: "423105407309",
  appId: "1:423105407309:web:f0767a031c6e627e88ef04",
  measurementId: "G-GBR7CPPCJ7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <SquircleNoScript />
  </StrictMode>,
);
