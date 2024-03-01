// пример один
const a = [1, 2, 3]

let res = [0, ...a, 4, ...a]

let b = {
    a: 1,
    b: 2,
}

let r = {
    c: 3,
    ...b
}

{
    name: "asdfsadf",
    ...,
    ...a,
    phone: "23423423"
}

const updateUserPhone = (user, newPhone) => {

    const { name, phone } = user;

    const res = {
        ...user,
        phone: newPhone
    }

    return res;
}
