"use client";

import { useState } from "react";

export default function Input({
  value,
  onChange,
  placeholder,
  name,
  type = "text",
  required
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className="bg-white border rounded p-4"
      required={required}
    />
  );
}
