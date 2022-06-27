interface IPostImage {
  attributes: {
    name: string,
    url: string,
    alternativeText: string
  }
}

interface IPost {
  attributes: {
    name: string,
    description: string,
    price: number,
    images: {
      data: Array<IPostImage>
    }
    locale: string,
    categories: Array<any>
  },
  id: number
}
