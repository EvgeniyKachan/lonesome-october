import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Character from "./screens/Character/Character";
import AddCharacter from "./components/characters/AddCharacter";
import EditCharacter from "./components/characters/EditCharacter";
import Authorization from "./components/authorization/Authorization";
import Home from "./screens/Home/Home";
import { PageLayout } from "./components/PageLayout/PageLayout";
import { useAuth } from "./hooks/useAuth.ts";

function App() {
  const { isLoggedIn } = useAuth();
  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route index element={<Home />} />
        <Route path="character">
          <Route path=":characterId" element={<Character />} />
          <Route path="add-character" element={<AddCharacter />} />
          <Route path="edit-character" element={<EditCharacter />} />
        </Route>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route index element={<Home />} />
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
