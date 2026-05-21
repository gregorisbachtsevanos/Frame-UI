import { useEffect, useRef, useState } from "react";

export function useCarousel() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    const el = viewportRef.current;
    if (!el) return;

    const children = Array.from(el.children);
    const target = children[i] as HTMLElement;

    target?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });

    setIndex(i);
  };

  const next = () => {
    const el = viewportRef.current;
    if (!el) return;

    const max = el.children.length - 1;
    scrollToIndex(Math.min(index + 1, max));
  };

  const prev = () => {
    scrollToIndex(Math.max(index - 1, 0));
  };

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];

      const scrollLeft = el.scrollLeft;

      let closestIndex = 0;
      let minDiff = Infinity;

      children.forEach((child, i) => {
        const diff = Math.abs(child.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      });

      setIndex(closestIndex);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return {
    viewportRef,
    index,
    next,
    prev,
    scrollToIndex,
  };
}
