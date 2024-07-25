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
    details: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    type: "Online Event",
    visitors: 39,
    price: 0,
    distance: 0,
    category: "Hobbies and Passions",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Manhattan Bible Study Meetup Group",
    type: "Online Event",
    visitors: 39,
    price: 0,
    distance: 0,
    category: "Social Activities",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New Jersey Business Network",
    type: "Offline Event",
    visitors: 39,
    price: 0,
    distance: 15,
    category: "Health and Wellbeing",
  },
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    type: "Online Event",
    visitors: 39,
    price: 0,
    distance: 0,
    category: "Hobbies and Passions",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Dump writing group",
    type: "Online Event",
    visitors: 9,
    price: 0,
    distance: 0,
    category: "Social Activities",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Dump writing group",
    type: "Offline Event",
    visitors: 9,
    price: 0,
    distance: 75,
    category: "Art and Culture",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Social Activities",
    type: "Offline Event",
    visitors: 84,
    price: 479,
    distance: 100,
    category: "Business",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Dump writing group",
    type: "Offline Event",
    visitors: 84,
    price: 479,
    distance: 5,
    category: "Games",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Hobbies and Passions",
    type: "Offline Event",
    visitors: 6,
    price: 49,
    distance: 10,
    category: "Health and Wellbeing",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New Jersey Business Network",
    type: "Offline Event",
    visitors: 84,
    price: 479,
    distance: 15,
    category: "Social Activities",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New Jersey Business Network",
    type: "Offline Event",
    visitors: 6,
    price: 49,
    distance: 25,
    category: "Art and Culture",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New York AI Users",
    type: "Offline Event",
    visitors: 6,
    price: 49,
    distance: 50,
    category: "Business",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New York AI Users",
    type: "Offline Event",
    visitors: 84,
    price: 1999,
    distance: 75,
    category: "Games",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New York AI Users",
    type: "Offline Event",
    visitors: 6,
    price: 49,
    distance: 100,
    category: "Hobbies and Passions",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Being an INFJ",
    type: "Offline Event",
    visitors: 84,
    price: 1999,
    distance: 5,
    category: "Social Activities",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Being an INFJ",
    type: "Offline Event",
    visitors: 84,
    price: 1999,
    distance: 10,
    category: "Health and Wellbeing",
  },
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Being an INFJ",
    type: "Online Event",
    visitors: 84,
    price: 1999,
    distance: 0,
    category: "Art and Culture",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Being an INFJ",
    type: "Online Event",
    visitors: 84,
    price: 1999,
    distance: 0,
    category: "Business",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "Being an INFJ",
    type: "Offline Event",
    visitors: 84,
    price: 1999,
    distance: 50,
    category: "Games",
  },
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Being an INFJ",
    type: "Online Event",
    visitors: 847,
    price: 19,
    distance: 0,
    category: "Hobbies and Passions",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New York AI Users",
    type: "Online Event",
    visitors: 847,
    price: 19,
    distance: 0,
    category: "Social Activities",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New York AI Users",
    type: "Offline Event",
    visitors: 847,
    price: 19,
    distance: 5,
    category: "Health and Wellbeing",
  },
  {
    image: "/assets/img/event.jpg",
    date: "WED, MAR 13 - 11:30 PM UTC",
    title: "All Nations - Manhattan Missions Church Bible Study",
    details: "Hobbies and Passions",
    type: "Online Event",
    visitors: 847,
    price: 19,
    distance: 0,
    category: "Art and Culture",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New York AI Users",
    type: "Online Event",
    visitors: 847,
    price: 19,
    distance: 0,
    category: "Business",
  },
  {
    image: "/assets/img/event.jpg",
    date: "SAT, MAR 23 3:00 PM UTC",
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    details: "New York AI Users",
    type: "Online Event",
    visitors: 847,
    price: 19,
    distance: 0,
    category: "Games",
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
  eventDetails.textContent = `${event.details} || ${event.category} (${event.distance}km)`;
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

  if (event.type === "Online Event") {
    const eventOnline = document.createElement("p");
    const iconOnline = document.createElement("img");
    eventOnline.textContent = `${event.type}`;
    iconOnline.src = "/assets/img/online.svg";
    iconOnline.alt = "Online Event Icon";
    eventOnline.appendChild(iconOnline);
    eventWraps.appendChild(eventOnline);
  }

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
