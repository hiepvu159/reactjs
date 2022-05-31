import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://randomuser.me/api/?results=10");
        const { results } = await res.json();
        setUserInfo(results);
        setIsLoading(false);
        setInterval(() => {
          results.unshift(results.pop());
          setUserInfo([...results]);
        }, 1000);
      } catch (error) {
        console.log("Call API Failed.", error.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className="main">
          <UserCard classname="cont" users={userInfo} />
        </div>
      )}
    </>
  );
}

export default App;
