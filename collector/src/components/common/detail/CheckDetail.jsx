import React from "react";

import { CheckState } from "src/utils/constants";

export default function CheckDetail({ title, accessor, data, type }) {
  return (
    <div className="row">
      <label className="column">{title}</label>
      <input className="column" name={title} value={data[accessor]} disabled />
    </div>
  );
}
