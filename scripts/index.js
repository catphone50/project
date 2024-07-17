const eventContainer = document.querySelector(".container-event");
const eventContainerOnline = document.querySelector(".container-event-online");
const btnSeeAllOnline = document.querySelector(
  ".see-all-events-btn-online-events"
);
const btnSeeAllOffline = document.querySelector(
  ".see-all-events-btn-offline-events"
);

let screenWidth = window.innerWidth;
let showEvents = screenWidth >= 768 ? 8 : 3;

const events = [
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 39,
    price: 0,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 39,
    price: 0,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 39,
    price: 0,
  },
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 39,
    price: 0,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 9,
    price: 0,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 9,
    price: 0,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 84,
    price: 479,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 84,
    price: 479,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 6,
    price: 49,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 84,
    price: 479,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 6,
    price: 49,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 6,
    price: 49,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 84,
    price: 1999,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 6,
    price: 49,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 84,
    price: 1999,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 84,
    price: 1999,
  },
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 84,
    price: 1999,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 84,
    price: 1999,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 84,
    price: 1999,
  },
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 847,
    price: 19,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 847,
    price: 19,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 847,
    price: 19,
  },
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 847,
    price: 19,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 847,
    price: 19,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 847,
    price: 19,
  },
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 847,
    price: 19,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 847,
    price: 19,
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions (5 km)",
    type: "Offline Event",
    visitors: 847,
    price: 19,
  },
];

function createEventCard(event) {
  const eventCard = document.createElement("div");
  eventCard.className = "event-card";

  const eventImage = document.createElement("img");
  eventImage.src = event.image;
  eventImage.alt = "Event Image";
  eventCard.appendChild(eventImage);

  const eventInfo = document.createElement("div");
  eventInfo.className = "event-info";

  const eventDate = document.createElement("div");
  eventDate.className = "event-date";
  eventDate.textContent = event.date;

  const iconDate = document.createElement("img");
  iconDate.className = "icon-date";
  iconDate.src = "/assets/img/date.svg";
  iconDate.alt = "Online Event Icon";
  eventDate.appendChild(iconDate);

  eventInfo.appendChild(eventDate);

  const eventTitle = document.createElement("div");
  eventTitle.className = "event-title";
  eventTitle.textContent = event.title;
  eventInfo.appendChild(eventTitle);

  const eventDetails = document.createElement("div");
  eventDetails.className = "event-details";
  eventDetails.textContent = event.details;
  eventInfo.appendChild(eventDetails);

  const eventWraps = document.createElement("div");
  eventWraps.className = "event-wraps";
  const eventPrice = document.createElement("p");
  const eventVisitors = document.createElement("p");
  const price = event.price > 0 ? `${event.price} $` : "free";
  eventPrice.textContent = `${price}`;
  eventVisitors.textContent = `${event.visitors} going`;
  const iconPrice = document.createElement("img");
  const iconVisitors = document.createElement("img");
  iconPrice.src = "/assets/img/ticket.svg";
  iconVisitors.src = "/assets/img/visitors.svg";
  iconPrice.alt = "Online Event Icon";
  iconVisitors.alt = "Online Event Icon";
  eventPrice.appendChild(iconPrice);
  eventVisitors.appendChild(iconVisitors);
  eventWraps.appendChild(eventVisitors);
  eventWraps.appendChild(eventPrice);
  eventInfo.appendChild(eventWraps);

  const eventType = document.createElement("div");
  eventType.textContent = event.type;
  eventType.className = "event-type";
  if (event.type === "Online Event") {
    const icon = document.createElement("img");
    icon.src = "/assets/img/online.svg";
    icon.alt = "Online Event Icon";
    eventType.appendChild(icon);
  }
  eventInfo.appendChild(eventType);

  eventCard.appendChild(eventInfo);
  return eventCard;
}

function renderEventCards(container, eventCards, eventCount) {
  container.innerHTML = "";

  for (let i = 0; i < eventCount; i++) {
    container.appendChild(eventCards[i]);
  }

  // if (showEvents < EventCards.length) {
  //   const showMoreButton = document.createElement("button");
  //   showMoreButton.textContent = `${
  //     EventCards.length - showEvents
  //   } attendees more`;
  //   showMoreButton.className = "event-count";
  //   showMoreButton.addEventListener("click", () => {
  //     showMoreEventHandler(EventCards, container);
  //     showMoreButton.style.display = "none";
  //   });
  //   container.appendChild(showMoreButton);
  // }
}

function showMoreEventHandler(EventCards, container) {
  EventCards.forEach((eventCard) => {
    eventCard.style.display = "flex";
    container.appendChild(eventCard);
  });
}

const generateEventCards = (eventArr) =>
  eventArr.map((event) => createEventCard(event));

const eventOffline = events.filter((event) => event.type === "Offline Event");
const eventOnline = events.filter((event) => event.type === "Online Event");
const eventOfflineCards = generateEventCards(eventOffline);
const eventOnlineCards = generateEventCards(eventOnline);

renderEventCards(eventContainer, eventOfflineCards, showEvents);
renderEventCards(eventContainerOnline, eventOnlineCards, showEvents);

btnSeeAllOnline.addEventListener("click", () => {
  showMoreEventHandler(eventOnlineCards, eventContainerOnline);
  btnSeeAllOnline.style.display = "none";
});

btnSeeAllOffline.addEventListener("click", () => {
  showMoreEventHandler(eventOfflineCards, eventContainer);
  btnSeeAllOffline.style.display = "none";
});

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
  showEvents = screenWidth >= 768 ? 8 : 3;
  renderEventCards(eventContainer, eventOfflineCards, showEvents);
  renderEventCards(eventContainerOnline, eventOnlineCards, showEvents);
});
