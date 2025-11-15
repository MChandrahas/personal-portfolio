
import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

export const useScrollAnimation = <T extends HTMLElement,>(options?: IntersectionObserverInit): [RefObject<T>, boolean] => {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // We can unobserve after it becomes visible to prevent re-triggering
        if(elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, {
      rootMargin: '0px',
      threshold: 0.1,
      ...options,
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef]);

  return [elementRef, isVisible];
};
