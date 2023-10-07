import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./page/CountryDetails";

const Loader = lazy(() => import("./components/Loader"));
const HomePage = lazy(() => import("./page/Home"));
const Layout = lazy(() => import("./components/Layout/Layout"));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:countryName" element={<CountryDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
