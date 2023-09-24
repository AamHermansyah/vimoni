import React from 'react'

type propTypes = {
  title: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ title, className = '', onClick }: propTypes) => {
  return (
    <button
      className={`${className} text-theme-text bg-white btn-shadow px-8 h-[40px] rounded-xl`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {title}
    </button>
  )
}

export default Button
