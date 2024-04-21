interface User {
    name: string;
    age: number;
    isMarried: boolean;
    home: null | object;
    dogs: undefined | object;
    family: string[];
    friend: {
        name: string;
        age: number;
        isMarried: boolean;
        work: null | object;
        family: { name: string; age: number }[];
    };
}

const user: User = {
    name: 'Vasya',
    age: 25,
    isMarried: false,
    home: null,
    dogs: undefined,
    family: ['мама', 'папа'],
    friend: {
        name: 'Petya',
        age: 30,
        isMarried: true,
        work: null,
        family: [
            { name: 'mother', age: 60 },
            { name: 'father', age: 62 },
        ],
    },
};
const cloneObject: User = {
    name: "",
    age: 0,
    isMarried: false,
    home: null,
    dogs: undefined,
    family: [],
    friend: {
        name: "",
        age: 0,
        isMarried: false,
        work: null,
        family: []
    }
};
for (let key in user) {
    if (typeof user[key] === 'object') {
        if (user[key] === null) {
            cloneObject[key] = user[key];
            continue;
        }

        if (user[key].length) {
            cloneObject[key] = [];

            for (let i = 0; i < user[key].length; i++) {
                cloneObject[key][i] = user[key][i];
            }

            continue;
        }

        cloneObject[key] = {};

        for (let keyFriend in user[key]) {

            if (typeof user[key][keyFriend] === 'object') {
                if (user[key][keyFriend] === null) {
                    cloneObject[key][keyFriend] = user[key][keyFriend];
                    continue;
                }
    
                if (user[key][keyFriend].length) {
                    cloneObject[key][keyFriend] = [];
        
                    for (let i = 0; i < user[key][keyFriend].length; i++) {
                        cloneObject[key][keyFriend][i] = {};
                    }
        
                    continue;
                }
            } else {
                cloneObject[key][keyFriend] = user[key][keyFriend];
            }
        }
    } else {
        cloneObject[key] = user[key];
    }
}





