import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import * as styles from "./Carousel.css.js";
import { useCarousel } from "./useCarousel";

type CarouselContextValue = ReturnType<typeof useCarousel>;

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarouselContext() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("Carousel components must be used inside Root");
  return ctx;
}

export interface CarouselRootProps {
  children: ReactNode;
}

function Root({ children }: CarouselRootProps) {
  const api = useCarousel();

  return (
    <CarouselContext.Provider value={api}>
      <div className={styles.root}>{children}</div>
    </CarouselContext.Provider>
  );
}

function Viewport({ children }: { children: ReactNode }) {
  const { viewportRef } = useCarouselContext();

  return (
    <div className={styles.viewport}>
      <div ref={viewportRef} className={styles.track}>
        {Children.map(children, (child, i) => (
          <div className={styles.item} key={i}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

function Next() {
  const { next } = useCarouselContext();

  return (
    <button
      type="button"
      className={`${styles.nav} ${styles.next}`}
      onClick={next}
    >
      ›
    </button>
  );
}

function Previous() {
  const { prev } = useCarouselContext();

  return (
    <button
      type="button"
      className={`${styles.nav} ${styles.prev}`}
      onClick={prev}
    >
      ‹
    </button>
  );
}

export const Carousel = {
  Root,
  Viewport,
  Next,
  Previous,
};
