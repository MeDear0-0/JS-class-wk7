// const mail = {
//     sender: 'SIT, KMUTT',
//     recipent: 'Umaporn Sup',
//     title: 'Welcom to KMUTT',
//     sentDate: new Date(Date.now())
// }

// //Object destructuring
// let { recipent } = mail
// let { sentDate, title: header } = mail // sentDate, header
// console.log(recipent)
// console.log(sentDate)
// console.log(header)

const mail = {
    sender: 'SIT, KMUTT',
    recipent: {
        firstname:'Umaporn',
        lastname: 'Sup'
    },
    title: 'Welcom to KMUTT',
    sentDetail: {
        sentDate: new Date(Date.now()),
        host: { name:'@sit.kmutt' }
    }
}

//Object destructuring
let {recipent: { firstname, lastname } } = mail
console.log(firstname)
console.log(lastname)

let { sentDetail: {
    host: { name }
    }
} = mail
console.log(name)