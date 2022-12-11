import { useEffect } from 'react';

const Useoutsideclick = (ref, handler) => {
  useEffect(() => {
    const close = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', close);

    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, [ref, handler]);
};

export default Useoutsideclick;
