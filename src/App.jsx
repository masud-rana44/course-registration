import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <>
      <AppLayout />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f43f5e",
            color: "white",
          },
        }}
      />
    </>
  );
}

export default App;
