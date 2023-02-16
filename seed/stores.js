const db = require('../db')
const Store = require('../models/store')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const stores = [
    {
      name: 'Shi San Yu',
      city: 'Hang Zhou',
      logo: 'https://wx3.sinaimg.cn/large/006l0IQzly8h6600za794j30b40b4gll.jpg'
    },
    {
      name: 'Ming Jing Hua Fu',
      city: 'Hang Zhou',
      logo: 'https://gdp.alicdn.com/imgextra/i2/4009430182/O1CN01ySdXA11DDOigTohwS_!!4009430182.jpg'
    },
    {
      name: 'Chong Hui Han Tang',
      city: 'Cheng Du',
      logo: 'https://gw.alicdn.com/imgextra//74/27/TB1xt3n28r0gK0jSZFnwu2RRXXa.png_110x10000.jpg_.webp'
    },
    {
      name: 'Tong Guan',
      city: 'Cheng Du',
      logo: 'https://pic.hanfugou.com/web/2021/8/13/18/3466bc4e117641009d98919fcb505421.jpg_100x100.jpg'
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
