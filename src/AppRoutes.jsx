import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import CreateBlogForm from "./pages/CreateBlogForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="create-blog" element={<CreateBlogForm />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
