import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "../project2/main_2.css";
const url = "https://course-api.com/react-tours-project";

const Main_2 = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const removeFunc = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours Left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeFunction={removeFunc} />
    </main>
  );
};

export default Main_2;
