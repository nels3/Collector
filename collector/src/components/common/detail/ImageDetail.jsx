import React from "react";

export default function ImageDetail({ title, accessor, data, type }) {
  return (
    <div className="row">
      <label className="column">{title}</label>

      {data[accessor] && (
        <div>
          <label className="column"></label>
          <img className="preview" src={data[accessor]} alt="" />
        </div>
      )}
    </div>
  );
}
