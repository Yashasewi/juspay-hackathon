import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { MainLayout } from "./components/MainLayout";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MainLayout />
    </ThemeProvider>
  );
}
