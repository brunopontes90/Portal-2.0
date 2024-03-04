import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";
import LoginPage from "./Auth/LoginPage";
import ListAdmin from "./Pages/ListAdmin/ListAdmin";
import ListUser from "./Pages/ListUser/ListUser";
import { Route, Routes } from "react-router-dom";

export const Users = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Users.Provider value={data}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list-admin" element={<ListAdmin />} />
        <Route path="/list-user" element={<ListUser />} />
      </Routes>
    </Users.Provider>
  );
}

export default App;
