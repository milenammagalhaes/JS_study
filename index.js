// object literals
let user = {
  name: `milena`,
  age: 24,
  location: `Montreal`,
  nicknames: [`Mi`, `mimi`, `mimica`],
  login: (name) => {
    console.log(`the user logged in`, name)
  },
  logout: () => {
    console.log(`the user logged out`)
  },
}
// console.log(user.nicknames)
// user.age = 25
// console.log(user)
// console.log(typeof user.age)
user.login(user.name)
user.logout(user.name)
const name = `rafael`
name.toUpperCase()

const nova = 32