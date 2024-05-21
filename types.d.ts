interface PortfolioItem {
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
  price: number
  aboutItem: string
  description: string
  categories: string[]
  img: {
    src: string
    width: number
    height: number
    alt: string
  }
}
