import { Suspense, lazy } from "react";

// Spline's runtime is heavy, so the player is code-split and only fetched when
// this component actually mounts (e.g. when the About page is visited).
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  /** URL of the exported `.splinecode` scene. */
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="size-8 animate-spin rounded-full border-2 border-white/25 border-t-white/90" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
