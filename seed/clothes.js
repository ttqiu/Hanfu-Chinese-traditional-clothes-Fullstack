const db = require('../db')
const Clothes = require('../models/clothes')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const clothes = [
    {
      name: 'Die Hua Jian',
      image:
        'https://img.alicdn.com/imgextra/i2/2878066472/O1CN01EHAI2E1xgE8taRn6v_!!2878066472.jpg',
      style: 'Song',
      category: ['long bezi', 'duijin shan', 'camisole top', 'skirt'],
      fabric: ['Polyester', 'Spandex', 'Lyocell', 'Nylon', 'Viscose'],
      store: '63ea8d0da9f8f0b357ee964e'
    },
    {
      name: 'Dun Huang Fei Tian',
      image:
        'https://img.alicdn.com/imgextra/i4/2878066472/O1CN01bWraAf1xgE6Div6eW_!!2878066472.jpg',
      style: 'Tang',
      category: ['Tan collar ruqun'],
      fabric: ['Polyester', 'Lyocell', 'Viscose'],
      store: '63ea8d0da9f8f0b357ee964e'
    },
    {
      name: 'Kui Miao',
      image:
        'https://img.alicdn.com/imgextra/i4/4009430182/O1CN01kLk6BA1DDOrazCt0B_!!4009430182.jpg',
      style: 'Ming',
      category: ['bijia', 'pipa sleeve'],
      fabric: ['Polyester'],
      store: '63ea8d0da9f8f0b357ee964f'
    },
    {
      name: 'Hua Xiang Rong',
      image:
        'https://img.alicdn.com/imgextra/i3/2835046187/O1CN016ddrFW1vZhCTg1H1E_!!2835046187.jpg',
      style: 'Tang',
      category: ['chest-high ruqun'],
      fabric: ['Polyester'],
      store: '63ea8d0da9f8f0b357ee9650'
    },
    {
      name: 'Xiong Guo Guo',
      image:
        'https://img.alicdn.com/imgextra/i1/54097151/O1CN01ehw67922hD3HxmMC7_!!54097151.jpg',
      style: 'Ming',
      category: ['square collar duijin short ao'],
      fabric: ['Polyester'],
      store: '63ea90b6d2b81c4a946144fc'
    }
  ]

  await Clothes.insertMany(clothes)
  console.log('Created some clothes!')
}
const run = async () => {
  await main()
  db.close()
}

run()
