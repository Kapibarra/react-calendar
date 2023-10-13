import React, { useState } from "react";
import classes from "./Filters.module.css";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

function EventFilters({ initialLocation, onFilterChange, events }) {
  // Создайте списки уникальных значений для фильтров
  const sportsOptions = [...new Set(events.map((event) => event.sport))];
  const eventTypeOptions = [...new Set(events.map((event) => event.eventType))];
  const statusOptions = [...new Set(events.map((event) => event.status))];
  const ageOptions = [...new Set(events.map((event) => event.age))];
  const locationOptions = [...new Set(events.map((event) => event.location))];

  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    sport: null,
    eventType: null,
    status: null,
    age: null,
    location: null,
    date: null,
  });
  const handleFiltersChange = () => {
    const filters = {
      sport: selectedSport,
      eventType: selectedEventType,
      status: selectedStatus,
      age: selectedAge,
      location: selectedLocation,
      date: selectedDate,
    };
    onFilterChange(filters);
  };

  const resetFilters = () => {
    setSelectedSport(null);
    setSelectedEventType(null);
    setSelectedStatus(null);
    setSelectedAge(null);
    setSelectedLocation(null);
    setSelectedDate(null);
    setSelectedFilters({
      sport: null,
      eventType: null,
      status: null,
      age: null,
      location: null,
      date: null,
    });
    onFilterChange({});
  };
  return (
    <div className={classes.filters}>
      <Dropdown
        style={{ width: "180px" }}
        value={selectedSport}
        options={[
          { label: "Все виды спорта", value: null }, // Добавьте эту опцию
          ...sportsOptions.map((sport) => ({ label: sport, value: sport })),
        ]}
        onChange={(e) => {
          setSelectedSport(e.value);
          handleFiltersChange();
        }}
        placeholder="Вид спорта"
      />
      <Dropdown
        style={{ width: "180px" }}
        value={selectedEventType}
        options={eventTypeOptions.map((eventType) => ({
          label: eventType,
          value: eventType,
        }))}
        onChange={(e) => {
          setSelectedEventType(e.value);
          handleFiltersChange();
        }}
        placeholder="Вид мероприятия"
      />
      <Dropdown
        style={{ width: "180px" }}
        value={selectedStatus}
        options={statusOptions.map((status) => ({
          label: status,
          value: status,
        }))}
        onChange={(e) => {
          setSelectedStatus(e.value);
          handleFiltersChange();
        }}
        placeholder="Cтатус мероприятия"
      />
      <Dropdown
        style={{ width: "180px" }}
        value={selectedAge}
        options={ageOptions.map((age) => ({ label: age, value: age }))}
        onChange={(e) => {
          setSelectedAge(e.value);
          handleFiltersChange();
        }}
        placeholder="Возрастная группа"
      />
      <Dropdown
        style={{ width: "180px" }}
        value={selectedLocation}
        options={locationOptions.map((location) => ({
          label: location,
          value: location,
        }))}
        onChange={(e) => {
          setSelectedLocation(e.value);
          handleFiltersChange();
        }}
        placeholder="Место проведения"
      />
      <Calendar
        style={{ width: "180px" }}
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e.value);
          handleFiltersChange();
        }}
        placeholder="Дата проведения"
      />
      <button className={classes.resetButton} onClick={resetFilters}>
        Сбросить фильтры
      </button>
    </div>
  );
}

export default EventFilters;
