import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all rounded-full";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-white text-primary border border-border hover:border-primary/20 hover:shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "hover:bg-brand-lavender/50 text-foreground"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }
  return <button className={classes} {...props}>{children}</button>;
};
export default Button;
