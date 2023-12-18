import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { effect } from './Effect';


export const Effect = () => {
  const wrapper = useRef();

  useLayoutEffect(() => {
    if (wrapper.current) effect(wrapper.current);
  }, []);
  return <div className="fixed inset-0 -z-10" ref={wrapper}></div>;
};
