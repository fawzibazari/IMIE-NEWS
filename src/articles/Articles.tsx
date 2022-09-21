import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import Header from "../header/header";
import { DELETE_POST, GET_POSTS } from "../querys";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

function Articles() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [array, setArray] = useState<[] | any>();
  const [deletePost] = useMutation(DELETE_POST);


  useEffect(() => {
    console.log(loading);
    if (loading === false) {
      setArray(data.posts.edges);
      console.log(data.posts);
    }
  }, [loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

function onDelete(id:string) {
    deletePost({
        variables: {
          input: {
            id: id
          },
        },
      });
}

  return (
    <>
      <Header />
      <div style={{ display: "inline-table" }}>
        <ImageList sx={{ width: 500, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}></ImageListItem>
          {data.posts.edges.map((item: any) => (
            <ImageListItem key={item.node.image_url}>
              <img
                src={`${item.node.image_url}?w=248&fit=crop&auto=format`}
                alt={item.node.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.node.title}
                subtitle={item.node.users.nickName}
                actionIcon={
                    <>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.node.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.node.title}`}
                    onClick={() => onDelete(item.node.id)}
                  >
                    <DeleteIcon/>
                  </IconButton>
                  </>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}

export default Articles;
