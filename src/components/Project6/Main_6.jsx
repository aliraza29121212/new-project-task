import React, { useState, useEffect } from "react";
import "../Project6/Main_6.css";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

const Main_6 = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchjobs = async () => {
    const respnose = await fetch(url);
    const newjobs = await respnose.json();
    setJobs(newjobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchjobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center d-block">
        {/* btn conteiner */}
        {jobs.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setValue(index)}
              className={`job-btn  ${index === value && "active-btn"}`}
            >
              {item.company}
            </div>
          );
        })}
        {/* jon info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Main_6;
