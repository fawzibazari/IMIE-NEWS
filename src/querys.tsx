import { gql } from '@apollo/client';

export const ADD_CATEGORIE = gql`
mutation create($type: createCategorieInput!){
    createCategorie(input: $type) {
      categorie {
        name
      }
    }
  }
`;
export const ADD_USER = gql`
mutation createUser($type: createUserInput!){
  createUser(input: $type) {
    user{
      email,
      roles,
      password,
      createdAt,
      lastName,
      nickName,
      firstName
    }
  }
}
`;
export const ADD_POST = gql`
mutation createPost($type: createPostInput!){
  createPost(
    input: $type
  ) {
     post{
      title
      content
      imageUrl
      alias
      createdAt
      users {
        id
      }
    }
  }
}
`;
export const GET_POST = gql`
query getPost($type: ID!){
  post(id: $type) {
    id
    title
    users{
      nick_name
    }
  }
}
`;
export const GET_POSTS = gql`
query getPosts{
  posts {
    edges {
      node {
        title
        content
        image_url
      }
    }
  }
}
`;