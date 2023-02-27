import { useEffect } from "react";
import StartGallery from "src/components/gallery/StartGallery";

import { getDisplayText, dictionary as dict } from "src/utils/languageUtil";

export default function Home() {
  var homeData = require("src/static/data/home.json");

  const language = "pl";
  const platesCount = homeData[0].plates;
  const countryCount = homeData[0].countries;
  const cityCount = homeData[0].cities;

  useEffect(() => {
    document.title = `Home`;
  }, []);

  return (
    <div style={{ padding: "5px" }}>
      <h9 style={{ fontSize: "20px" }}>
        {getDisplayText(language, dict.home.welcome)}
      </h9>
      <h6 style={{ fontSize: "16px" }}>
        {getDisplayText(language, dict.home.have)}
        {platesCount}
        {getDisplayText(language, dict.home.plates)}
        {countryCount}
        {getDisplayText(language, dict.home.countries)}
        {cityCount}
        {getDisplayText(language, dict.home.cities)}
      </h6>
      <StartGallery />
    </div>
  );
}
