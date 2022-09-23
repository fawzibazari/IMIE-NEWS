import { gql } from "@apollo/client";

export const ADD_CATEGORIE = gql`
  mutation create($type: createCategorieInput!) {
    createCategorie(input: $type) {
      categorie {
        name
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation createUser($type: createUserInput!) {
    createUser(input: $type) {
      user {
        email
        roles
        password
        createdAt
        lastName
        userName
        firstName
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser($type: ID!) {
    user(id: $type) {
      id
      userName
      firstName
      last_name
      email
    }
  }
`;

export const ADD_POST = gql`
  mutation createPost($type: createPostInput!) {
    createPost(input: $type) {
      post {
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
  query getPost($type: ID!) {
    post(id: $type) {
      id
      title
      users {
        userName
      }
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    posts {
      edges {
        node {
          id
          title
          content
          image_url
          users {
            userName
          }
        }
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($input: deletePostInput!) {
    deletePost(input: $input) {
      post {
        id
      }
    }
  }
`;
