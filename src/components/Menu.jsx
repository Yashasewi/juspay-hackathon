import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MenuItem } from "./MenuItem";
import { Button } from "@/components/ui/button";
import { menuData } from "@/data/menuData";
import { motion, AnimatePresence } from "framer-motion";

export function Menu() {
  const [currentMenu, setCurrentMenu] = useState(menuData);
  const [navigationStack, setNavigationStack] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("Menu");

  const handleMenuItemClick = (item) => {
    if (item.children && item.children.length > 0) {
      // Navigate to submenu
      setNavigationStack([
        ...navigationStack,
        { menu: currentMenu, title: currentTitle },
      ]);
      setCurrentMenu(item.children);
      setCurrentTitle(item.title);
    } else {
      // No children, just log the action
      console.log(`Clicked: ${item.title}`);
    }
  };

  const handleBackClick = () => {
    if (navigationStack.length > 0) {
      const previous = navigationStack[navigationStack.length - 1];
      setCurrentMenu(previous.menu);
      setCurrentTitle(previous.title);
      setNavigationStack(navigationStack.slice(0, -1));
    }
  };

  return (
    <ScrollArea className="h-full w-full pb-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTitle}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="pb-0 pt-4 space-y-1"
        >
          {/* Back button - show only when not at root level */}
          {navigationStack.length > 0 && (
            <div className="px-4 pb-2">
              <Button
                variant="ghost"
                className="h-auto px-0 py-2 justify-start text-left hover:bg-accent transition-all duration-200 hover:translate-x-1 group"
                onClick={handleBackClick}
              >
                <div className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2 text-muted-foreground transition-all duration-200 group-hover:text-foreground group-hover:-translate-x-1" />
                  <span className="text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                    Back
                  </span>
                </div>
              </Button>
            </div>
          )}

          {/* Current menu title */}
          {/* {navigationStack.length > 0 && (
            <div className="px-4 pb-3">
              <h2 className="text-lg font-semibold text-foreground">
                {currentTitle}
              </h2>
            </div>
          )} */}

          {/* Menu items */}
          {currentMenu.map((item, index) => (
            <motion.div
              key={`${currentTitle}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.15,
                delay: index * 0.02,
                ease: "easeOut",
              }}
            >
              <MenuItem
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                onClick={() => handleMenuItemClick(item)}
                showArrow={item.children && item.children.length > 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </ScrollArea>
  );
}
