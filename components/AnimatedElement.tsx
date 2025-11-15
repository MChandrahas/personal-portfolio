
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className = '', as = 'div' }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();
  const Component = as;

  return (
    <Component
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;
