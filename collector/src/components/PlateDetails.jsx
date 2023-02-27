import React, { useState, useEffect } from "react";

import Details from "src/components/common/Details";
import { LoadingState } from "src/utils/constants";
import { getDisplayText, dictionary as dict } from "src/utils/languageUtil";

export default function PlateDetails({ plate }) {
  const [file, setFile] = useState(null);

  const language = "pl";

  console.log(plate);

  const fields = [
    {
      title: getDisplayText(language, dict.plateDetails.image),
      accessor: "img",
      type: "image",
    },
    {
      title: getDisplayText(language, dict.plateDetails.countryEn),
      accessor: "country",
      type: "input",
    },
    {
      title: getDisplayText(language, dict.plateDetails.countryPl),
      accessor: "country_pl",
      type: "input",
    },
    {
      title: getDisplayText(language, dict.plateDetails.cityEn),
      accessor: "city",
      type: "input",
    },
    {
      title: getDisplayText(language, dict.plateDetails.cityPl),
      accessor: "city_pl",
      type: "input",
    },
    {
      title: getDisplayText(language, dict.plateDetails.latitude),
      accessor: "latitude",
      type: "input",
    },
    {
      title: getDisplayText(language, dict.plateDetails.longitude),
      accessor: "longitude",
      type: "input",
    },
    {
      title: getDisplayText(language, dict.plateDetails.info),
      accessor: "info",
      type: "textarea",
    },
    {
      title: getDisplayText(language, dict.plateDetails.is_country_plate),
      accessor: "is_country_plate",
      type: "checkbox",
    },
  ];
  return (
    <>
      {plate ? (
        <div style={{ padding: "5px" }}>
          <Details
            id="plate_details"
            data={plate}
            data_add={file}
            fields={fields}
            title={getDisplayText(language, dict.plateDetails.title)}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
