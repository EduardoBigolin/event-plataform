import { useEffect } from "react";
import { client } from "./lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { Rotas } from "./Router";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
