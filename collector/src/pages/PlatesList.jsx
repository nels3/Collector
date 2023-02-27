import { useEffect, useState } from "react";
import { LoadingState } from "src/utils/constants";

import Table from "src/components/common/Table";
import PlateDetails from "src/components/PlateDetails";

import { BiMessageSquareAdd } from "react-icons/bi";
import { getDisplayText, dictionary as dict } from "src/utils/languageUtil";
import "src/static/table.css";
export default function PlatesList() {
  var platesData = require("src/static/data/plates.json");

  const [plate, setPlate] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const language = "pl";
  const platesList = platesData;

  useEffect(() => {
    document.title = `Plates`;
    if (platesList.length === 0) {
    }
  }, []);

  const columns = [
    {
      Header: getDisplayText(language, dict.plateList.country),
      accessor: getDisplayText(language, dict.plateList.countryAccessor),
      width: 150,
    },
    {
      Header: getDisplayText(language, dict.plateList.city),
      accessor: getDisplayText(language, dict.plateList.cityAccessor),
      width: 150,
    },
    {
      Header: getDisplayText(language, dict.plateList.image),
      accessor: "image_present",
      width: 80,
    },
    {
      Header: getDisplayText(language, dict.plateList.is_country_plate),
      accessor: "is_country_plate",
      width: 80,
    },
  ];

  const onRowClickAction = (rowDetails, rowIndex) => {
    setPlate(rowDetails);
    setSelectedRowIndex(rowIndex);
  };

  return (
    <div style={{ padding: "5px" }}>
      <PlateDetails plate={plate} />
      <Table
        columns={columns}
        data={platesList}
        onClickAction={onRowClickAction}
        selectedRowIndex={selectedRowIndex}
      />
    </div>
  );
}
