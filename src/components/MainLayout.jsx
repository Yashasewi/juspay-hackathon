import { MenuSheet } from "./MenuSheet";
import { ModeToggle } from "./Theme/ThemeToggle";

export function MainLayout() {
  return (
    <>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 w-full">
        <div>
          <MenuSheet />
        </div>
      </div>
    </>
  );
}
