import { useEffect, useRef, useState } from 'react';

/**
 * Subtle parallax: element translates slightly slower than page scroll.
 * `speed` is the offset ratio (0.15 = move 15% of the element's distance from viewport center).
 * Respects prefers-reduced-motion (returns transform "none").
 */
export function useParallax<T extends HTMLElement = HTMLElement>(speed = 0.18) {
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState<string>('none');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      // Distance of element center from viewport center
      const offset = (rect.top + rect.height / 2) - viewportH / 2;
      const translate = -offset * speed;
      setTransform(`translate3d(0, ${translate.toFixed(2)}px, 0)`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return { ref, style: { transform, willChange: 'transform' } as React.CSSProperties };
}