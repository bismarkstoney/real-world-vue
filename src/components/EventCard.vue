<template>
  <router-link
    :to="{ name: 'EventDetails', params: { id: event.id } }"
    class="link"
  >
    <div class="hello">
      <p>@{{ event.time }} -on {{ event.date }}</p>
      <span class="space">{{ event.title }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100px;
  width: 300px;
  border: 2px solid black;
  margin: 10px;
  align-self: center;
  padding: 30px;
}
.link {
  text-decoration: none;
}
</style>
