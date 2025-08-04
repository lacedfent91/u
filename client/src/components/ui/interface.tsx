import { useEffect } from "react";
import { useGame } from "@/lib/stores/useGame";
import { useAudio } from "@/lib/stores/useAudio";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { VolumeX, Volume2, RotateCw, Trophy } from "lucide-react";

export function Interface() {
  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);
  const { isMuted, toggleMute } = useAudio();

  // Handle clicks on the interface in the ready phase to start the game
  useEffect(() => {
    if (phase === "ready") {
      const handleClick = () => {
        const activeElement = document.activeElement;
        if (activeElement && 'blur' in activeElement) {
          (activeElement as HTMLElement).blur();
        }
        const event = new KeyboardEvent("keydown", { code: "Space" });
        window.dispatchEvent(event);
      };

      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }
  }, [phase]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Top-right corner UI controls */}
      <div className="fixed top-4 right-4 flex gap-2 z-50 pointer-events-auto">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMute}
          title={isMuted ? "Unmute" : "Mute"}
          className="bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background/95"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={restart}
          title="Restart Game"
          className="bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background/95"
        >
          <RotateCw size={18} />
        </Button>
      </div>
      
      {/* Game completion overlay */}
      {phase === "ended" && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/50 backdrop-blur-sm pointer-events-auto">
          <Card className="w-full max-w-md mx-4 shadow-2xl border-border/50 bg-background/95 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Trophy className="text-yellow-500" />
                Level Complete!
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-center text-muted-foreground">
                Congratulations! You successfully navigated the course.
              </p>
            </CardContent>
            
            <CardFooter className="flex justify-center">
              <Button onClick={restart} className="w-full">
                Play Again
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
      
      {/* Instructions panel */}
      <div className="fixed bottom-4 left-4 z-40 pointer-events-auto">
        <Card className="w-auto max-w-xs bg-background/90 backdrop-blur-sm border-border/50 shadow-lg">
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Controls:</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>WASD or Arrow Keys: Move the ball</li>
              <li>Space: Jump</li>
              <li>R: Restart game</li>
              <li>M: Toggle sound</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
