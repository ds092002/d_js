import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Home from './Home';
import Navbar from '../components/Navbar';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import StudentEdit from '../components/StudentEdit';


const AppLayout = ({ children }) => (
  <div>
    <Navbar />
    <main className="p-4">{children}</main>
  </div>
);

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes with Navbar */}
        <Route
          path="/home"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="/students"
          element={
            <AppLayout>
              <StudentList />
            </AppLayout>
          }
        />
        <Route path="/edit/:id" element={
          <AppLayout>
            <StudentEdit />
          </AppLayout>
        } />

        <Route
          path="/add"
          element={
            <AppLayout>
              <StudentForm />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
