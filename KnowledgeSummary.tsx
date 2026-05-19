import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BackgroundMusicProps {
  isPaused?: boolean;
  resultType?: 'VICTORY' | 'FAILURE' | null;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ 
  isPaused = false,
  resultType = null
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [bgPlayer, setBgPlayer] = useState<any>(null);
  const [victoryPlayer, setVictoryPlayer] = useState<any>(null);
  const [failurePlayer, setFailurePlayer] = useState<any>(null);
  
  const bgPlayerRef = useRef<any>(null);
  const victoryPlayerRef = useRef<any>(null);
  const failurePlayerRef = useRef<any>(null);

  const bgVideoId = "80EAuJ00So0";
  const victoryVideoId = "899kstdMUoQ";
  const failureVideoId = "LukyMYp2noo";
  
  const fixedVolume = 20;

  // Handle Mute
  useEffect(() => {
    [bgPlayer, victoryPlayer, failurePlayer].forEach(p => {
      if (p && p.setVolume) {
        if (isMuted) {
          p.setVolume(0);
        } else {
          // Individual volumes when non-muted
          if (p === bgPlayer) p.setVolume(fixedVolume);
          if (p === victoryPlayer) p.setVolume(70);
          if (p === failurePlayer) p.setVolume(60);
        }
      }
    });
  }, [isMuted, bgPlayer, victoryPlayer, failurePlayer]);

  // Handle Pausing/Playing based on screen and result state
  useEffect(() => {
    // Background Player Control
    if (bgPlayer && bgPlayer.pauseVideo && bgPlayer.playVideo) {
      if (isPaused || !!resultType) {
        bgPlayer.pauseVideo();
      } else {
        bgPlayer.playVideo();
      }
    }

    // Victory Player Control
    if (victoryPlayer && victoryPlayer.playVideo && victoryPlayer.stopVideo) {
      if (resultType === 'VICTORY') {
        victoryPlayer.playVideo();
      } else {
        victoryPlayer.stopVideo();
      }
    }

    // Failure Player Control
    if (failurePlayer && failurePlayer.playVideo && failurePlayer.stopVideo) {
      if (resultType === 'FAILURE') {
        failurePlayer.playVideo();
      } else {
        failurePlayer.stopVideo();
      }
    }
  }, [isPaused, resultType, bgPlayer, victoryPlayer, failurePlayer]);

  useEffect(() => {
    const setupBgPlayer = () => {
      if (bgPlayerRef.current) return;
      bgPlayerRef.current = new (window as any).YT.Player('youtube-bg-player', {
        height: '0', width: '0', videoId: bgVideoId,
        playerVars: { autoplay: 1, loop: 1, playlist: bgVideoId, controls: 0, showinfo: 0, autohide: 1, modestbranding: 1, enablejsapi: 1, origin: window.location.origin },
        events: {
          onReady: (event: any) => {
            const p = event.target;
            setBgPlayer(p);
            p.setVolume(isMuted ? 0 : fixedVolume);
            if (!isPaused && !resultType) p.playVideo();
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.ENDED) event.target.playVideo();
          }
        }
      });
    };

    const setupVictoryPlayer = () => {
      if (victoryPlayerRef.current) return;
      victoryPlayerRef.current = new (window as any).YT.Player('victory-player', {
        height: '0', width: '0', videoId: victoryVideoId,
        playerVars: { autoplay: 0, controls: 0, showinfo: 0, modestbranding: 1, enablejsapi: 1, origin: window.location.origin },
        events: {
          onReady: (event: any) => {
            const p = event.target;
            setVictoryPlayer(p);
            p.setVolume(isMuted ? 0 : 70);
          }
        }
      });
    };

    const setupFailurePlayer = () => {
      if (failurePlayerRef.current) return;
      failurePlayerRef.current = new (window as any).YT.Player('failure-player', {
        height: '0', width: '0', videoId: failureVideoId,
        playerVars: { autoplay: 0, controls: 0, showinfo: 0, modestbranding: 1, enablejsapi: 1, origin: window.location.origin },
        events: {
          onReady: (event: any) => {
            const p = event.target;
            setFailurePlayer(p);
            p.setVolume(isMuted ? 0 : 60);
          }
        }
      });
    };

    const setupAll = () => {
      setupBgPlayer();
      setupVictoryPlayer();
      setupFailurePlayer();
    };

    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      (window as any).onYouTubeIframeAPIReady = setupAll;
    } else if ((window as any).YT && (window as any).YT.Player) {
      setupAll();
    }

    const forcePlay = () => {
      if (bgPlayerRef.current?.playVideo && !isPaused && !resultType) bgPlayerRef.current.playVideo();
    };
    window.addEventListener('mousedown', forcePlay, { once: true });
    return () => window.removeEventListener('mousedown', forcePlay);
  }, []); // Only init once

  return (
    <>
      <div className="fixed inset-0 pointer-events-none opacity-0 overflow-hidden -z-50">
        <div id="youtube-bg-player"></div>
        <div id="victory-player"></div>
        <div id="failure-player"></div>
      </div>
      
      <div className="fixed bottom-6 left-6 z-[60] flex items-center">
        <div className="relative group">
          <motion.div 
            className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 hover:bg-white/10 transition-all duration-300 shadow-2xl"
          >
            <div 
              className="cursor-pointer"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-red-500" />
              ) : (
                <Volume2 className="w-5 h-5 text-anime-blue" />
              )}
            </div>

            <motion.div
              animate={{ rotate: isMuted ? 0 : 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="flex items-center justify-center"
            >
              <Music className={`w-4 h-4 ${isMuted ? 'text-slate-600' : 'text-anime-blue'}`} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
