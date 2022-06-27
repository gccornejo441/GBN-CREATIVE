type CreatePostThunkResponse = IPost

type CreatePostThunkBody = {
  data: any,
  token?: string,
  locale: string
}

type UpdatePostThunkBody = {
  id: number,
  data: any,
  token?: string,
  locale: string
}

type DeletePostThunkBody = {
  id: number,
  token?: string,
  locale: string
}

type GetAllPostsThunkResponse = Array<IPost>

type GetPostByIdThunkResponse = IPost
type GetPostByIdThunkBody = {
  id: string,
  token?: string,
  locale: string
}


type GetAllPostsThunkBody = {
  token?: string,
  locale: string
}

type GetAllCategoriesThunkResponse = Array<any>

type GetAllCategoriesThunkBody = {
  token?: string,
  locale: string,
  populate?: any,
}

type CreateCategoryThunkResponse = ICategory
type CreateCategoryThunkBody = {
  data: any,
  token?: string,
  locale: string
}

type GetCategoryByIdThunkResponse = ICategory
type GetCategoryByIdThunkBody = {
  id: string,
  token?: string,
  locale: string
}

type UpdateCategoryThunkResponse = ICategory
type UpdateCategoryThunkBody = {
  id: number,
  token?: string,
  locale: string,
  data: any
}

//{
//     data: {
//       name: string
//       description: string,
//       price: number,
//       category: number,
//       image: number
//     }








