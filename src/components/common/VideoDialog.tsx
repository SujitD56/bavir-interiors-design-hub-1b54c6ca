import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import brandVideo from "@/assets/videos/brand-video.mp4";

interface VideoDialogProps {
  trigger?: React.ReactNode;
}

export function VideoDialog({ trigger }: VideoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="luxury-outline" size="xl">
            <Play className="mr-2 h-4 w-4" /> Watch Our Story
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
        <DialogHeader className="p-4 absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
          <DialogTitle className="text-white font-heading">Our Brand Story</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <video
            src={brandVideo}
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
}
