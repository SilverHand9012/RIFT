import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import loadingVideo from "@/assets/elements/main-loading.mp4";

/**
 * Full-screen loading overlay with video animation and zoom-out reveal.
 *
 * Lifecycle:
 *   1. Mount → blue overlay + centered video auto-plays.
 *   2. Video ends (or failsafe fires) → video scales to 15× over ~0.8 s.
 *   3. Scale animation completes → calls onLoadingComplete to unmount.
 *
 * Failsafe: if the video has not ended within FAILSAFE_MS the reveal
 * animation is triggered anyway, preventing an infinite loading state.
 */

interface LoaderProps {
  /** Called once the reveal animation finishes; parent should set loading = false. */
  onLoadingComplete: () => void;
}

/** Max time (ms) before the failsafe auto-dismisses the loader. */
const FAILSAFE_MS = 3_500;

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  /** true while the video is still playing; false once it ends (or failsafe fires). */
  const [isPlaying, setIsPlaying] = useState(true);
  /** true while the zoom-out reveal animation is running. */
  const [isRevealing, setIsRevealing] = useState(false);
  /** Guards against triggering the reveal more than once. */
  const revealTriggered = useRef(false);
  const failsafeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Trigger the reveal animation (called once) ──────────────────────
  const triggerReveal = useCallback(() => {
    if (revealTriggered.current) return;
    revealTriggered.current = true;

    // Clear the failsafe if the video ended naturally.
    if (failsafeTimer.current) {
      clearTimeout(failsafeTimer.current);
      failsafeTimer.current = null;
    }

    setIsPlaying(false);
    setIsRevealing(true);
  }, []);

  // ── Failsafe timer ─────────────────────────────────────────────────
  useEffect(() => {
    failsafeTimer.current = setTimeout(triggerReveal, FAILSAFE_MS);

    return () => {
      if (failsafeTimer.current) {
        clearTimeout(failsafeTimer.current);
      }
    };
  }, [triggerReveal]);

  // ── Called when the Framer-Motion scale animation finishes ──────────
  const handleRevealComplete = () => {
    setIsRevealing(false);
    onLoadingComplete();
  };

  // ── Video ended handler ────────────────────────────────────────────
  const handleVideoEnded = () => {
    triggerReveal();
  };

  // ── Video error handler (same as failsafe: dismiss) ────────────────
  const handleVideoError = () => {
    triggerReveal();
  };

  return (
    <motion.div
      key="loader-overlay"
      initial={{ backgroundColor: "#0055ff" }}
      animate={{ 
        backgroundColor: isRevealing ? "#ffffff" : "#0055ff"
      }}
      transition={{ 
        backgroundColor: { delay: 0.5, duration: 0.3, ease: "easeInOut" },
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={
          isRevealing
            ? { scale: 25, opacity: 0 }
            : { scale: 1, opacity: 1 }
        }
        transition={
          isRevealing
            ? { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
            : { duration: 0 }
        }
        onAnimationComplete={() => {
          if (isRevealing) {
            handleRevealComplete();
          }
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          willChange: "transform, opacity",
        }}
      >
        <video
          src={loadingVideo}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          onError={handleVideoError}
          style={{
            width: "min(20vw, 200px)",
            objectFit: "contain" as const,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
