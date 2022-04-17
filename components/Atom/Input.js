import React from "react";

export default function Input({id, type, placeholder, required, onChange, className}) {
  return (
    <input
      id={id}
      type={type}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`text-sm border rounded px-3 py-2 ${className}`}
    />
  );
}
