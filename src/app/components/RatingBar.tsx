import React from "react";

interface RatingBarProps {
  value: number;
  isEditable: boolean;
  color: string;
  activeColor: string;
  size: number;
  className?: string;
}

export default function RatingBar({ value, size, color, activeColor, className }: RatingBarProps) {
  // Example rendering of stars
  return <div className={className}>{`Rating: ${value}`}</div>;
}
