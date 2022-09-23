import { useQuery, useMutation } from "@apollo/client";
import { useEffect } from "react";
import Header from "../header/header";
import { DELETE_POST, GET_POSTS } from "../querys";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";

function Articles() {
  const { loading, error, data, refetch } = useQuery(GET_POSTS);
  const [deletePost] = useMutation(DELETE_POST);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    refetch();
    console.log(data?.posts?.edges);
    console.log("here");
    if (token === null) {
      navigate("/login");
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  function onDelete(e: any, id: string) {
    console.log(e);
    deletePost({
      variables: {
        input: {
          id: id,
        },
      },
    });
    refetch();
    console.log(data.posts.edges);
  }

  return (
    <>
      <Header />
      <div style={{ display: "inline-table" }}>
        <ImageList sx={{ width: 800 }}>
          <ImageListItem key="Subheader" cols={2}></ImageListItem>
          {data.posts.edges.map((item: any) => (
            <ImageListItem key={item.node.id}>
              <img
                src={`${item.node.image_url}?w=248&fit=crop&auto=format`}
                alt={item.node.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.node.title}
                subtitle={item.node.users.userName}
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
                      onClick={(e) => onDelete(e, item.node.id)}
                    >
                      <DeleteIcon />
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
