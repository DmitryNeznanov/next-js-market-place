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
  post: string
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
