import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StyledEngineProvider } from "@mui/material/styles";

const client = new ApolloClient({
  uri: "https://127.0.0.1:8000/api/graphql",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//     query catgories {
//       categories{
//        edges{node{
//         name
//       }}
//       }
//     }
//     `,
//   })
//   .then((result) => console.log(result));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
