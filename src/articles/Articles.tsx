import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import Header from "../header/header";
import { GET_POSTS } from "../querys";

function Articles() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [array, setArray] = useState();

  useEffect(() => {
    console.log(loading);
    if (loading === false) {
      setArray(data.posts.edges);
    }
  }, [loading]);

  console.log(array);
  


  return (
    <>
      <Header />
      <div>articles</div>
    </>
  );
}

export default Articles;
