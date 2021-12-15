import axios from "axios";
const eventClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/bismarkstoney/servervue",
  withCredentails: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return eventClient.get("/events");
  },
  getEvent(id) {
    return eventClient.get(`/events/${id}`);
  },
};
