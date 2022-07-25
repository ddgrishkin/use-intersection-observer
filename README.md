# Use Intersection Observer Hook
Implementation of [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) as a hook for using inside [React](https://reactjs.org/) apps.

## Example Of Usage
```javascript
import {useRef, useCallback} from 'react';
import useIntersectionObserver from '@ddgrishkin/use-intersection-observer';

const targetRef = useRef<HTMLElement>(null);
const handleIntersection = useCallback((entries) => {
  if (entries[0].isIntersecting) {
    // do some stuff
  }
}, []);

/* Use it inside react FC */
useIntersectionObserver(targetRef, handleIntersection);
```
