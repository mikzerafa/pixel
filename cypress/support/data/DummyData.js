const Faker = require('faker');
import { faker } from '@faker-js/faker';

const get = {
    fakeEmail: () => { return Faker.Internet.email() },
    fakePassword: () => { return numbers(3) + letters(7) + lettersUpper(1) + '!' },
    fakeCity: () => { return Faker.Address.city() },
    fakeAddress: () => { return Faker.Address.streetAddress() },
    fakePostCode: () => { return postCode() },
    fakeFirstName: () => { return Faker.Name.firstName() },
    fakeLastName: () => { return Faker.Name.lastName() },

    fakeDateOfBirthAbove18: () => { return formatDateWith0s(faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toLocaleDateString()) },
    dummy: (format) => { return dummy(format) }

}

function dummy(format, output = "") {
    if (format.length > 0) {
        switch (format[0]) {
            case 'n':
                output += numbers(1)
                break;
            case 'c':
                output += letters(1)
                break;
            case '(':
                let amount = parseInt(format.substring(1, format.indexOf(')')))
                let type = output.charAt(output.length - 1)
                    //BUG here -> output has value not type .. below is a patch
                if (type == 'n') {
                    type == 'c';
                }
                format = Quantify(type, amount - 1) + format.substring(format.indexOf(')') + 1, format.length)
            default:
                output += format[0];
                break;
        }
        output = dummy(format.substring(1, format.length), output)
    }

    return output;
}

function Quantify(letter, amount, output = "") {
    if (amount > 0) {
        output += letter;
        amount--
        output = Quantify(letter, amount, output)
    }

    return output;
}



function formatDateWith0s(date) {
    const value = date + "";
    let output = "";
    let values = value.split('/');

    for (let index = 0; index < values.length; index++) {
        switch (index) {
            case 0:
                output = output + Add0sIfNeccessary(values[1]) + "/";
                break;
            case 1:
                output = output + Add0sIfNeccessary(values[0]) + "/";
                break;
            case 2:
                output = output + values[2];
                break;

        }

    }

    return output;
}

function Add0sIfNeccessary(value) {
    if (value.length < 2) {
        return "0" + value;
    } else {
        return +value;
    }
}

function postCode() {
    return Faker.random.city_prefix() + numbers(3);
}


function lettersUpper(amount, output = "") {
    if (amount > 0) {
        amount--;
        output += Faker.random.first_name()[0];
        output = lettersUpper(amount, output)
    }
    return output;
}

function letters(amount, output = "") {
    if (amount > 0) {
        amount--;
        const name = Faker.random.first_name();

        output += name[name.length - 1];
        output = letters(amount, output);
    }
    return output;
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