interface Portfolio {
  _id: Types.ObjectId
  name: string
  categories: string[]
  img: {
    src: string
    width: number
    height: number
    alt: string
  }
}
interface Post {
  _id: Types.ObjectId
  title: string
  author: string
  date: Types.Date
  categories: string[]
  img: {
    src: string
    width: number
    height: number
    alt: string
  }
}
interface Item {
  _id: Types.ObjectId
  item: string
  sizes: string[]
  price: number
  about: string
  description: [{ content: string }]
  information: [{ content: string }]
  categories: string[]
  img: {
    src: string
    width: number
    height: number
    alt: string
  }
  itemSlider: [{ src: string; width: number; height: number; alt: string }]
  reviews: [{ name: string; email: string; body: string; rating: number }]
}
