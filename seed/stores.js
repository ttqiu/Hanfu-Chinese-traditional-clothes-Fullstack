const db = require('../db')
const Store = require('../models/store')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const stores = [
    {
      name: 'Shi San Yu',
      city: 'Hang Zhou',
      logo: 'https://img1.baidu.com/it/u=1229746017,3918196524&fm=253&fmt=auto&app=120&f=JPEG?w=552&h=500'
    },
    {
      name: 'Ming Jing Hua Fu',
      city: 'Hang Zhou',
      logo: 'https://gw.alicdn.com/tfs//d5/62/TB139GOtZyYBuNkSnfoSuwWgVXa.jpg'
    },
    {
      name: 'Chong Hui Han Tang',
      city: 'Cheng Du',
      logo: 'https://img2.baidu.com/it/u=451042266,81601475&fm=253&fmt=auto&app=138&f=JPEG?w=267&h=339'
    }
  ]

  await Store.insertMany(stores)
  console.log('Created some stores!')
}
const run = async () => {
  await main()
  db.close()
}

run()
