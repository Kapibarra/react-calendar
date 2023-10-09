import React from "react";
import classes from "./Calendar.module.css";
import EventFilters from "../../components/Filters/Filters";
import banner from "../../assets/banner.png";
function CalendarPage() {
  return (
    <div className={classes.Calendar}>
      <img className={classes.calendarImage} alt="main banner" src={banner} />
      <EventFilters onFilterChange={(filters) => console.log(filters)} />
    </div>
  );
}

export default CalendarPage;
