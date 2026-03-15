import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'motion/react';

export default function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  const count = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      animate(0, value, {
        duration: 2,
        onUpdate: (latest) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(latest).toString() + suffix;
          }
        }
      });
    }
  }, [inView, value, suffix]);

  return <span ref={nodeRef} />;
}
