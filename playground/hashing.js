const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 10
};

let token = jwt.sign(data, '123abc');
console.log(token);

let decoded = jwt.verify(token, '123ac');
console.log('decoded', decoded);
/* let message = 'I am VD';
let hash = SHA256(message).toString();

console.log(message);
console.log(hash);

let data = {
    id: 4
};

let token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (hash === resultHash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed');
} */