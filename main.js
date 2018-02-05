const app = new Vue({
  el: "#app",
  data: {
    bobby: {
      first: "Bobby",
      last: "Boone",
      age: 25
    },
    john: {
      first: "Johnny",
      last: "Boby",
      age: 35,
    }
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
      return `${value.last} ${value.first}`;
    }
  },
  template: `
    <div>
      <h2>Name: {{john | fullName}}</h2>
      <h2>Age: {{john.age}}</h2>
      <h2>Name: {{bobby | fullName}}</h2>
      <h2>Age: {{bobby.age}}</h2>
    </div>
  `
})
