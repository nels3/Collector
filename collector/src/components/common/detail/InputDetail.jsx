import React from "react";

export default function InputDetail({ title, accessor, data, type }) {
  return (
    <div className="row">
      <label className="column">{title}</label>
      <input className="column" name={title} value={data[accessor]} disabled />
    </div>
  );
}
