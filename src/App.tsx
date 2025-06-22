import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Character from "./components/characters/Character";
import AddCharacter from "./components/characters/AddCharacter";
import EditCharacter from "./components/characters/EditCharacter";
import Login from "./components/authorization/Login";
import Home from "./components/main/Home";
import { PageLayout } from "./components/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth" element={<Login />} />
        <Route path="character">
          <Route path=":userId" element={<Character />} />
          <Route path="add-character" element={<AddCharacter />} />
          <Route path="edit-character" element={<EditCharacter />} />
        </Route>
      </Routes>
    </PageLayout>
  );
}

export default App;
