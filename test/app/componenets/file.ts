import { File } from "lucide-react";
import { Button } from "@/components/ui/button";

export function File() {
  return (
    <Button variant="outline">
      <File className="w-4 h-4" />
      <span>File</span>
    </Button>
  );
}