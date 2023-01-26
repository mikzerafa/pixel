const Faker = require('faker');

const get = {
    fakeEmail: () => { return Faker.Internet.email() },
    fakePassword: () => { return numbers(3) + Faker.random.first_name() + '!' }
}

function numbers(amount, output = "") {
    if (amount > 0) {
        amount--;
        output = output + Faker.random.number(9);
        output = numbers(amount, output)
    }
    return output;
}

export default {
    get
}