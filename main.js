const app = new Vue({
  el: "#app",
  data: {
    friends: [{
      first: "Bobby",
      last: "Boone",
      age: 25
    }, {
      first: "Johnny",
      last: "Boby",
      age: 35,
    }]
  },
  computed: {
    bobbyFullName() {
      return `${this.bobby.first} ${this.bobby.last}`;
    },
    johnFullName() {
      return `${this.john.first} ${this.john.last}`;
    }
  },
  filters: {
    fullName(value) {
      return `${value.first} ${value.last}`;
    }
  },
  methods: {
    incrementAge(friend) {
      friend.age += 1;
    },
    decrementAge(friend) {
      friend.age -= 1;
    }
  },
  template: `
    <div>
      <h2 v-for="friend in friends">
        <h4>{{ friend | fullName }}</h4>
        <h5>{{ friend.age }}</h5>
        <button v-on:click="incrementAge(friend)">+</button>
        <button v-on:click="decrementAge(friend)">-</button>
        <input v-model="friend.first"/>
        <input v-model="friend.last"/>
      </h2>
    </div>
  `
})
