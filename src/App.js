import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

const customTheme = {
  name: "modern-theme",
  tokens: {
    colors: {
      background: {
        primary: "#f4f4f8", // Light background
        secondary: "#ffffff",
      },
      font: {
        primary: "#333", // Dark text
        secondary: "#555",
      },
      brand: {
        primary: {
          100: "#4f46e5", // Deep purple brand color
          80: "#6d28d9",
          60: "#9333ea",
          40: "#a855f7",
        },
      },
    },
    radii: {
      small: "10px",
      medium: "15px",
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: "{colors.brand.primary.100}" },
          borderRadius: { value: "{radii.medium}" },
        },
      },
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="app-container">
            <header className="app-header">
              <img src={logo} className="app-logo" alt="logo" />
              <h1>Welcome, {user ? user.username : "Guest"}!</h1>
              <p>Amplify Authentication with Modern UI</p>
              <button className="sign-out-btn" onClick={signOut}>
                Sign Out
              </button>
            </header>
          </div>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;
