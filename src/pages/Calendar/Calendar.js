import React, { useState, useEffect } from "react";
import classes from "./Calendar.module.css";
import EventFilters from "../../components/Filters/Filters";
import banner from "../../assets/banner.png";
import Card from "../../components/Card/Card";

// import eventsData from "../../assets/events.json";
// const queryParams = new URLSearchParams(window.location.search);
// const locationParam = queryParams.get("location");

function CalendarPage() {
  const eventsData = [
    {
      id: 1,
      mainImg: "url_картинки_1",
      startTime: "2023-07-02T11:00:00", // Дата и время начала события
      endTime: "2023-07-02T18:00:00", // Дата и время окончания события
      location: "г. Наро-Фоминск, Московская область",
      title: "Соревнования по плаванию",
      description:
        "Юноши, от 13 до 17 лет, Бег на короткие дистанции, 3 юн. разряд. Девушки, от 13 до 17 лет, Бег на короткие дистанции, 3 юн. разряд.",
      sport: "Плавание",
      eventType: "Соревнования",
      status: "Активное",
      age: "13-17 лет",
    },
    {
      id: 2,
      mainImg: "url_картинки_2",
      startTime: "2023-07-10T09:00:00",
      endTime: "2023-07-10T15:00:00",
      location: "г. Москва",
      title: "Турнир по футболу",
      description: "Соревнования среди команд любителей футбола.",
      sport: "Футбол",
      eventType: "Турнир",
      status: "Активное",
      age: "Любители",
    },
    {
      id: 3,
      mainImg: "url_картинки_3",
      startTime: "2023-07-20T14:00:00",
      endTime: "2023-07-20T19:00:00",
      location: "г. Санкт-Петербург",
      title: 'Беговой марафон "Северная столица"',
      description: "Марафон по улицам Санкт-Петербурга для всех возрастов.",
      sport: "Легкая атлетика",
      eventType: "Марафон",
      status: "Активное",
      age: "Все возраста",
    },
    {
      id: 4,
      mainImg: "url_картинки_4",
      startTime: "2023-08-05T10:00:00",
      endTime: "2023-08-05T17:00:00",
      location: "г. Казань, Республика Татарстан",
      title: "Спортивный день в парке",
      description: "Активные игры и соревнования для детей и взрослых.",
      sport: "Различные виды",
      eventType: "Фестиваль",
      status: "Активное",
      age: "Дети и взрослые",
    },
    {
      id: 5,
      mainImg: "url_картинки_5",
      startTime: "2023-08-15T13:00:00",
      endTime: "2023-08-15T20:00:00",
      location: "г. Екатеринбург, Свердловская область",
      title: "Скейтборд-соревнования",
      description: "Состязания среди профессиональных скейтеров.",
      sport: "Скейтбординг",
      eventType: "Соревнования",
      status: "Активное",
      age: "Профессионалы",
    },
    {
      id: 6,
      mainImg: "url_картинки_6",
      startTime: "2023-09-08T09:00:00",
      endTime: "2023-09-08T16:00:00",
      location: "г. Ростов-на-Дону, Ростовская область",
      title: "Баскетбольный турнир",
      description: "Соревнования по баскетболу для команд разного уровня.",
      sport: "Баскетбол",
      eventType: "Турнир",
      status: "Активное",
      age: "Все возраста",
    },
    {
      id: 7,
      mainImg: "url_картинки_7",
      startTime: "2023-09-20T11:00:00",
      endTime: "2023-09-20T17:00:00",
      location: "г. Красноярск, Красноярский край",
      title: "Спортивный праздник на реке",
      description: "Водные виды спорта и развлечения на берегу реки.",
      sport: "Водные виды спорта",
      eventType: "Фестиваль",
      status: "Активное",
      age: "Все возраста",
    },
    {
      id: 8,
      mainImg: "url_картинки_8",
      startTime: "2023-10-10T12:00:00",
      endTime: "2023-10-10T18:00:00",
      location: "г. Владивосток, Приморский край",
      title: 'Триатлон "Морской волк"',
      description: "Соревнования по триатлону на побережье океана.",
      sport: "Триатлон",
      eventType: "Соревнования",
      status: "Активное",
      age: "Все возраста",
    },
    {
      id: 9,
      mainImg: "url_картинки_9",
      startTime: "2023-11-15T09:00:00",
      endTime: "2023-11-15T16:00:00",
      location: "г. Нижний Новгород, Нижегородская область",
      title: 'Веломарафон "Городские дали"',
      description: "Марафон для велосипедистов по улицам города.",
      sport: "Велоспорт",
      eventType: "Марафон",
      status: "Активное",
      age: "Все возраста",
    },
    {
      id: 10,
      mainImg: "url_картинки_10",
      startTime: "2023-12-20T15:00:00",
      endTime: "2023-12-20T21:00:00",
      location: "г. Уфа, Республика Башкортостан",
      title: "Соревнования по лыжным гонкам",
      description: "Гонки на лыжах для любителей и профессионалов.",
      sport: "Лыжные гонки",
      eventType: "Соревнования",
      status: "Активное",
      age: "Все возраста",
    },
    // Добавьте другие спортивные мероприятия по аналогии
  ];
  const [filteredEvents, setFilteredEvents] = useState(eventsData); // Используйте filteredEvents для отображения событий
  // const [locationParam, setLocationParam] = useState(null);
  useEffect(() => {}, []);
  const filterEvents = (filters) => {
    setFilteredEvents(
      eventsData.filter((event) => {
        return (
          (!filters.sport || event.sport === filters.sport) &&
          (!filters.eventType || event.eventType === filters.eventType) &&
          (!filters.status || event.status === filters.status) &&
          (!filters.age || event.age === filters.age) &&
          (!filters.location || event.location === filters.location) &&
          (!filters.date || isDateInRange(event, filters.date))
        );
      })
    );
  };
  // Функция для проверки, находится ли дата в диапазоне
  const isDateInRange = (event, filterDate) => {
    const startDate = new Date(event.startTime);
    const endDate = new Date(event.endTime);
    const filter = new Date(filterDate);
    return filter >= startDate && filter <= endDate;
  };
  return (
    <div className={classes.Calendar}>
      <img className={classes.calendarImage} alt="main banner" src={banner} />
      <EventFilters
        // initialLocation={locationParam}
        onFilterChange={filterEvents}
        events={eventsData}
      />
      <div className={classes.CardWrapper}>
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            mainImg={event.mainImg}
            time={event.time}
            location={event.location}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CalendarPage;
