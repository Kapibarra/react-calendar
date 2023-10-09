import React from "react";
import classes from "./Calendar.module.css";
import EventFilters from "../../components/Filters/Filters";
import banner from "../../assets/banner.png";
// import eventsData from "../../assets/events.json";

const queryParams = new URLSearchParams(window.location.search);
const locationParam = queryParams.get("location");

function CalendarPage() {
  return (
    <div className={classes.Calendar}>
      <img className={classes.calendarImage} alt="main banner" src={banner} />
      <EventFilters
        // events={eventsData}
        initialLocation={locationParam}
        onFilterChange={(filters) => console.log(filters)}
      />
    </div>
  );
}

export default CalendarPage;
