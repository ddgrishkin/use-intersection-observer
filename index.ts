import {RefObject, useRef, useEffect, useCallback} from 'react';

export type UseIntersectionObserverOptions = IntersectionObserverInit;

export default function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  callback: IntersectionObserverCallback,
  options: UseIntersectionObserverOptions = {},
) {
  const rootRef = useRef<HTMLElement | undefined>(undefined);
  const observerRef = useRef<IntersectionObserver | undefined>(undefined);
  const callbackRef = useRef<IntersectionObserverCallback>(callback);
  callbackRef.current = callback;

  const unobserve = useCallback(() => {
    if (observerRef.current && rootRef.current) {
      rootRef.current = undefined;
      observerRef.current.unobserve(rootRef.current);
    }
  }, []);

  // unobserve after unmount
  useEffect(() => unobserve, []);
  useEffect(() => {
    if (ref.current) {
      rootRef.current = ref.current;
      observerRef.current = new IntersectionObserver(
        callbackRef.current,
        options,
      );

      observerRef.current.observe(rootRef.current);
    }

    return unobserve;
  }, [options.rootMargin, options.threshold]);
}
