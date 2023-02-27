import React from "react";

import TextAreaDetail from "src/components/common/detail/TextAreaDetail";
import ImageDetail from "src/components/common/detail/ImageDetail";
import InputDetail from "src/components/common/detail/InputDetail";
import CheckDetail from "src/components/common/detail/CheckDetail";
import CheckboxDetail from "src/components/common/detail/CheckboxDetail";

import "src/static/table.css";

export default function Detail({ title, accessor, data, type }) {
  if (type === "textarea") {
    return (
      <TextAreaDetail
        title={title}
        accessor={accessor}
        data={data}
        type={type}
      />
    );
  } else if (type === "image") {
    return (
      <ImageDetail title={title} accessor={accessor} data={data} type={type} />
    );
  } else if (type === "input") {
    return (
      <InputDetail title={title} accessor={accessor} data={data} type={type} />
    );
  } else if (type === "check") {
    return (
      <CheckDetail title={title} accessor={accessor} data={data} type={type} />
    );
  } else if (type === "checkbox") {
    return (
      <CheckboxDetail
        title={title}
        accessor={accessor}
        data={data}
        type={type}
      />
    );
  } else {
    return <></>;
  }
}
