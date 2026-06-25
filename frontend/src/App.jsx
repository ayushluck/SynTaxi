import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '@clerk/react';
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import ProblemPage from './pages/ProblemPage';
import DashboardPage from './pages/DashboardPage';
import { Toaster } from 'react-hot-toast';
function App() {
  const { isSignedIn , isLoaded } = useUser();
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
