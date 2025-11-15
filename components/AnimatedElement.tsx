import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Fix: Update props to allow passing additional HTML attributes like `onSubmit` and spread them to the underlying component.
interface AnimatedElementProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className = '', as = 'div', ...rest }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();
  const Component = as;

  return (
    <Component
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;