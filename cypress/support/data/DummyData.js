const Faker = require('faker');

const get = {
    fakeEmail: () => Faker.Internet.email,
    fakePassword: () => Faker.random.number + Faker.random.first_name + '!'
}

export default {
    get
}