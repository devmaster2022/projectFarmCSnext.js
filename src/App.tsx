import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesPreview from './components/features/FeaturesPreview';
import CustomerReviews from './components/reviews/CustomerReviews';
import Footer from './components/Footer';
import DashboardLayout from './components/dashboard/DashboardLayout';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import AboutUs from './components/about/AboutUs';
import ContactPage from './components/contact/ContactPage';
import LearnMoreLayout from './components/learn/LearnMoreLayout';
import Introduction from './components/learn/Introduction';
import HowItWorks from './components/learn/HowItWorks';

function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturesPreview />
      <CustomerReviews />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <HomePage />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <AboutUs />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <ContactPage />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/learn"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <LearnMoreLayout />
                  </main>
                  <Footer />
                </>
              }
            >
              <Route index element={<Introduction />} />
              <Route path="how-it-works" element={<HowItWorks />} />
            </Route>
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;