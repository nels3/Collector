import React from "react";
import Detail from "src/components/common/detail/Detail";
import { getDisplayText, dictionary as dict } from "src/utils/languageUtil";
import "src/static/form.css";

export default function Details({ fields, data, title = "" }) {
  const language = "pl";

  return (
    <div className="form-box">
      <h5>{title}</h5>
      <form>
        {fields.map((field, i) => {
          return (
            <Detail
              key={i}
              title={field.title}
              data={data}
              accessor={field.accessor}
              type={field.type}
            />
          );
        })}
      </form>
    </div>
  );
}
