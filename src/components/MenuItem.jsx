import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MenuItem({
  icon: Icon,
  title,
  subtitle,
  onClick,
  showArrow = false,
}) {
  return (
    <Button
      variant="ghost"
      className="w-full h-auto px-4 py-4 justify-start text-left hover:bg-accent/50 rounded-none transition-all duration-300 ease-out hover:translate-x-0.5 active:scale-[0.99] group"
      onClick={onClick}
    >
      <div className="flex items-center w-full">
        <div className="flex-shrink-0 mr-3 transition-transform duration-200 group-hover:scale-110">
          <Icon className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-foreground text-sm transition-all duration-200 group-hover:text-primary">
            {title}
          </div>
          {subtitle && (
            <div className="text-xs text-muted-foreground mt-0.5 leading-tight transition-colors duration-200 group-hover:text-foreground/70">
              {subtitle}
            </div>
          )}
        </div>
        {showArrow && (
          <div className="flex-shrink-0 ml-3 transition-transform duration-200 group-hover:translate-x-1">
            <ChevronRight className="h-4 w-4 text-muted-foreground transition-colors duration-200 group-hover:text-foreground" />
          </div>
        )}
      </div>
    </Button>
  );
}
