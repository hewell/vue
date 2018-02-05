Vue.component('friend-component', {
  props: ['friend'],
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
      <h4>{{ friend | fullName }}</h4>
      <h5>{{ friend.age }}</h5>
      <button v-on:click="incrementAge(friend)">+</button>
      <button v-on:click="decrementAge(friend)">-</button>
      <input v-model="friend.first"/>
      <input v-model="friend.last"/>
    </div>
  `
})

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

  template: `
    <div>
      <friend-component v-for="item in friends" v-bind:friend="item"/>
    </div>
  `
})
