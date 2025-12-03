import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#363636",
            fontFamily: "Inter, sans-serif",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <Outlet />
    </div>
  );
}

export default App;
