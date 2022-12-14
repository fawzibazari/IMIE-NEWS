import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import { ADD_POST } from "../querys";
import jwt_decode from "jwt-decode";

function NewArticles() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [addPost] = useMutation(ADD_POST);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  var decoded:Record<string,any>

  useEffect(() => {
    if (token === null) {
      navigate('/login')
    }
    else{
      decoded = jwt_decode(token as string);
    }
    console.log(decoded);
  }, )

  
  return (
    <>
      <Header />
      <p>NewArticles</p>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(title);
            console.log(content);
            console.log(imageUrl);
            addPost({
              variables: {
                type: {
                  title: title,
                  content: content,
                  imageUrl: imageUrl,
                  alias: alias,
                  createdAt: "Now",
                  users: `/api/users/${decoded.id}`
                },
              },
            });
            navigate('/articles');

          }}
        >
          <label>Title</label>
          <br />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label>content</label>
            <br />
            <input
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label>Image URL</label>
            <br />
            <input
              type="text"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div>
            <label>alias</label>
            <br />
            <input
              type="text"
              name="alias"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
            />
          </div>
          <br/>
          <button type="submit">Add Post ????</button>
        </form>
      </div>
    </>
  );
}

export default NewArticles;
