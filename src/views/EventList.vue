<template>
  <div class="space">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventServices from "@/services/EventServices.js";
export default {
  name: "EventList",
  data() {
    return {
      events: null,
    };
  },
  components: {
    EventCard,
  },
  created() {
    return EventServices.getEvents()
      .then((result) => {
        this.events = result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.space {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
</style>
