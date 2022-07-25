import { RefObject } from 'react';
export declare type UseIntersectionObserverOptions = IntersectionObserverInit;
export default function useIntersectionObserver(ref: RefObject<HTMLElement>, callback: IntersectionObserverCallback, options?: UseIntersectionObserverOptions): void;
