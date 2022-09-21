import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import Header from "../header/header";
import { GET_POSTS } from "../querys";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function Articles() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [array, setArray] = useState<[] | any>();

  useEffect(() => {
    console.log(loading);
    if (loading === false) {
      setArray(data.posts.edges);
      console.log(data.posts.edges[0].node.image_url);
    }
  }, []);

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(array);
  

  return (
    <>
      <Header />
      <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {data.posts.edges.map((item: any) => (
          <ImageListItem key={item.node.image_url}>
            <img
              src={`${item.node.image_url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.node.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.node.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.node.title}
              subtitle={item.node.users.nickName}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.node.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default Articles;
