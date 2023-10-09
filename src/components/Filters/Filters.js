import React, { useState } from "react";
import classes from "./Filters.module.css";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

function EventFilters({ onFilterChange }) {
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const applyFilters = () => {
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
  return (
    <div className={classes.filters}>
      <Dropdown
        style={{ width: "200px" }}
        value={selectedSport}
        options={sportsOptions}
        onChange={(e) => {
          setSelectedSport(e.value);
          handleFiltersChange(); // Применить фильтры после изменения значения
        }}
        optionLabel="label" // Укажите поле, по которому будет отображаться значение в выпадающем списке
        filter // Включить поле для поиска
        filterBy="label" // Укажите поле, по которому будет выполняться поиск
        placeholder="Вид спорта"
      />
      <Dropdown
        style={{ width: "200px" }}
        value={selectedStatus}
        options={statusOptions}
        onChange={(e) => {
          setSelectedStatus(e.value);
          handleFiltersChange();
        }}
        filter // Включить поле для поиска
        filterBy="label" // Укажите поле, по которому будет выполняться поиск
        placeholder="Cтатус мероприятия"
      />
      <Dropdown
        style={{ width: "200px" }}
        value={selectedAge}
        options={ageOptions}
        onChange={(e) => {
          setSelectedAge(e.value);
          handleFiltersChange();
        }}
        filter // Включить поле для поиска
        filterBy="label" // Укажите поле, по которому будет выполняться поиск
        placeholder="Возрастная группа"
      />
      <Dropdown
        style={{ width: "200px" }}
        value={selectedLocation}
        options={locationOptions}
        onChange={(e) => {
          setSelectedLocation(e.value);
          handleFiltersChange();
        }}
        placeholder="Место проведения"
      />
      <Calendar
        style={{ width: "200px" }}
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e.value);
          handleFiltersChange();
        }}
        placeholder="Дата проведения"
      />
    </div>
  );
}

const sportsOptions = [
  { label: "Футбол", value: "Футбол" },
  { label: "Баскетбол", value: "Баскетбол" },
  // Добавьте другие виды спорта
];

const statusOptions = [
  { label: "Активное", value: "Активное" },
  { label: "Завершенное", value: "Завершенное" },
  // Добавьте другие статусы мероприятия
];

const ageOptions = [
  { label: "Дети (6-12)", value: "Дети (6-12)" },
  { label: "Подростки (13-18)", value: "Подростки (13-18)" },
  // Добавьте другие возрастные группы
];
const locationOptions = [
  { label: "Москва", value: "Москва" },
  { label: "Питер", value: "Питер" },
  // Добавьте другие возрастные группы
];
export default EventFilters;
