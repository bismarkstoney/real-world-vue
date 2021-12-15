<template>
  <div class="hello" v-if="event">
    <p>@{{ event.time }} -on {{ event.date }}</p>
    <span class="space">{{ event.title }}</span>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventServices from "@/services/EventServices.js";
export default {
  name: "EventDetails",
  props: ["id"],

  data() {
    return {
      event: null
    };
  },
  created() {
    return EventServices.getEvent(this.id)
      .then((result) => {
        this.event = result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped></style>
