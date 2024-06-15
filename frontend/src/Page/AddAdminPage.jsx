import React, { useEffect, useState } from "react";
import AddAdmin from "../Components/AdminComponent/AddAdmin/AddAdmin";

const NotFound = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <h1>404 Page Not Found</h1>
  </div>
);

const AddAdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State untuk mengelola status login

  useEffect(() => {
    const token = localStorage.getItem('token'); // Mendapatkan token dari localStorage
    if (!token) {
      setIsLoggedIn(false); // Set status login menjadi false jika token tidak ada
    }
  }, []);

  if (!isLoggedIn) {
    return <NotFound />; // Menampilkan halaman 404 jika tidak login
  }

  return (
    <div>
      <AddAdmin />
    </div>
  );
};

export default AddAdminPage;
