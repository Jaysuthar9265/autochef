import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/common/Login";
import Signup from "./components/common/Signup";
import UserDashboard from "./components/user/UserDashboard";
import UserProfile from "./components/user/UserProfile";
import UserLayout from "./components/layouts/UserLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import RecipeDetail from "./components/pages/RecipeDetail";





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User */}
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/profile" element={<UserProfile />} />

        </Route>

         {/* Admin */}
         <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Pages */}

        <Route path="/recipes/:id" element={<RecipeDetail />} />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
