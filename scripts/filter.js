const eventContainer = document.querySelector(".container-event-filter");
const typeSelect = document.querySelector(".type-select");
const distanceSelect = document.querySelector(".distance-select");
const categorySelect = document.querySelector(".category-select");

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
  const price = event.price > 0 ? `${event.price} $` : "free";
  const iconPrice = document.createElement("img");
  eventPrice.textContent = `${price}`;
  iconPrice.src = "/assets/img/ticket.svg";
  iconPrice.alt = "Online Event Icon";

  const eventVisitors = document.createElement("p");
  const iconVisitors = document.createElement("img");
  eventVisitors.textContent = `${event.visitors} going`;
  iconVisitors.src = "/assets/img/visitors.svg";
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

function renderEventCards(container, eventCards) {
  container.innerHTML = "";
  for (let i = 0; i < eventCards.length; i++) {
    container.appendChild(eventCards[i]);
  }
}

const generateEventCards = (eventArr) =>
  eventArr.map((event) => createEventCard(event));

renderEventCards(eventContainer, generateEventCards(events));

typeSelect.addEventListener("change", (e) => {
  switch (e.target.value) {
    case "online":
      renderEventCards(
        eventContainer,
        generateEventCards(
          events.filter((event) => event.type === "Online Event")
        )
      );
      break;
    case "offline":
      renderEventCards(
        eventContainer,
        generateEventCards(
          events.filter((event) => event.type === "Offline Event")
        )
      );
      break;
    default:
      renderEventCards(eventContainer, generateEventCards(events));
      break;
  }
});

distanceSelect.addEventListener("change", (e) => {
  console.log(e.target.value);

  switch (e.target.value) {
    case "5":
      renderEventCards(
        eventContainer,
        generateEventCards(events.filter((event) => event.distance === 5))
      );
      break;

    case "10":
      renderEventCards(
        eventContainer,
        generateEventCards(events.filter((event) => event.distance === 10))
      );
      break;

    case "15":
      renderEventCards(
        eventContainer,
        generateEventCards(events.filter((event) => event.distance === 15))
      );
      break;

    case "25":
      renderEventCards(
        eventContainer,
        generateEventCards(events.filter((event) => event.distance === 25))
      );
      break;

    case "75":
      renderEventCards(
        eventContainer,
        generateEventCards(events.filter((event) => event.distance === 75))
      );
      break;

    case "50":
      renderEventCards(
        eventContainer,
        generateEventCards(events.filter((event) => event.distance === 50))
      );
      break;

    case "100":
      renderEventCards(
        eventContainer,
        generateEventCards(events.filter((event) => event.distance === 100))
      );
      break;

    default:
      renderEventCards(eventContainer, generateEventCards(events));
      break;
  }
});

categorySelect.addEventListener("change", (e) => {
  console.log(e.target.value);
  switch (e.target.value) {
    case "Social Activities":
      renderEventCards(
        eventContainer,
        generateEventCards(
          events.filter((event) => event.category === "Social Activities")
        )
      );
      break;
    case "Hobbies and Passions":
      renderEventCards(
        eventContainer,
        generateEventCards(
          events.filter((event) => event.category === "Hobbies and Passions")
        )
      );
    case "Health and Wellbeing":
      renderEventCards(
        eventContainer,
        generateEventCards(
          events.filter((event) => event.category === "Health and Wellbeing")
        )
      );
      break;
    case "Business":
      renderEventCards(
        eventContainer,
        generateEventCards(
          events.filter((event) => event.category === "Business")
        )
      );
      break;
    case "Art and Culture":
      renderEventCards(
        eventContainer,
        generateEventCards(
          events.filter((event) => event.category === "Art and Culture")
        )
      );
      break;
    case "Games":
      renderEventCards(
        eventContainer,
        generateEventCards(events.filter((event) => event.category === "Games"))
      );
      break;
    default:
      renderEventCards(eventContainer, generateEventCards(events));
      break;
  }
});
