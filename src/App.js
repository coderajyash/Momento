import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import SinglePost from "./pages/SinglePost";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="api/post/:postId/"
        element={
          <ProtectedRoute>
            <SinglePost />
          </ProtectedRoute>
        }
      />
      <Route
        path="api/profile/:profileId/"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="api/profile/:profileId/edit/"
        element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        }
      />
      <Route path="/register/" element={<Registration />} />
      <Route path="/login/" element={<Login />} />
    </Routes>
  );
}

export default App;