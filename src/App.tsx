import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Character from "./screens/Character/Character";
import AddCharacter from "./components/characters/AddCharacter";
import EditCharacter from "./components/characters/EditCharacter";
import Authorization from "./components/authorization/Authorization";
import Home from "./screens/Home/Home";
import { PageLayout } from "./components/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Authorization />} />
        <Route path="character">
          <Route path=":characterId" element={<Character />} />
          <Route path="add-character" element={<AddCharacter />} />
          <Route path="edit-character" element={<EditCharacter />} />
        </Route>
      </Routes>
    </PageLayout>
  );
}

export default App;
