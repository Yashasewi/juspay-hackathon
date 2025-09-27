import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "./Menu";

export function MenuSheet() {
  return (
    <Sheet side="bottom" className="w-full">
      <SheetTrigger asChild>
        <Button className="px-8 py-3 rounded-full text-sm font-medium transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
          Open Menu
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-fit max-h-[90dvh] mb-8 rounded-2xl max-w-[93%] mx-auto md:max-w-[50%] p-0 animate-in slide-in-from-bottom-6 duration-300"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate through different sections and features of the application
        </SheetDescription>
        <Menu />
      </SheetContent>
    </Sheet>
  );
}
