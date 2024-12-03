import { Route, Routes } from 'react-router-dom';  // Importing Route and Routes from 'react-router-dom' to manage navigation
import './App.css';  // Importing the CSS file for styling
import Home from './components/pages/Home';  // Importing Home component
import About from './components/pages/AboutPage';  // Importing About component
import Contact from './components/pages/ContactPage';  // Importing Contact component
import Signup from './components/shared/singup';
import { Toaster } from 'react-hot-toast';

// The App function is the main component where all routes and components are managed.
function App() {
  return (
    <> 
    <div >
      {/* The Routes component manages the routing of the app */}
      <Routes>
        {/* Define the route for Home page. The path '/' will render the Home component */}
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        
        {/* Define the route for About page. The path '/about' will render the About component */}
        <Route path="/about" element={<About />} />
        
        {/* Define the route for Contact page. The path '/contact' will render the Contact component */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster/>
    </div>
    </>
  );
}

export default App;  // Export the App component to be used in index.js
