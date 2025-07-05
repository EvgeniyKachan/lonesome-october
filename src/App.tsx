import { Route, Routes } from "react-router";
import Header from "./components/Header/Header.tsx";
import CharacterDetailsPage from "./screens/CharacterDetails/CharacterDetailsPage.tsx";
import AddCharacter from "./screens/AddCharacter/AddCharacter";
import Authorization from "./screens/Authorization/Authorization.tsx";
import Home from "./screens/Home/Home";
import { PageLayout } from "./components/PageLayout/PageLayout";
import { useAuth } from "./hooks/auth/useAuth.ts";

function App() {
  const { isLoggedIn } = useAuth();
  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route index element={<Home />} />
        <Route path="character">
          <Route path=":characterId" element={<CharacterDetailsPage />} />
          <Route path="add-character" element={<AddCharacter />} />
        </Route>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route index element={<Home />} />
        <Route path="character">
          <Route path=":characterId" element={<CharacterDetailsPage />} />
        </Route>
        <Route path="login" element={<Authorization />} />
      </Routes>
    );
  }

  return (
    <PageLayout>
      <Header />
      {routes}
    </PageLayout>
  );
}

export default App;
