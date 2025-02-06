import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router";
    
  import HomePage from "../pages/HomePage";
  import MintNFT from "../pages/MintNFT";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/mint-nft" element={<MintNFT />} />
      </Route>
    )
  );
  
  const Router = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Router;