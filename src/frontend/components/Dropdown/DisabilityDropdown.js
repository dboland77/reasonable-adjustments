import React, { useState, useEffect } from "react";
import { getDisabilities } from "../../services/user.service.js";

export const DisabilityDropdown = () => {
  const [disabilityList, setDisabilityList] = useState([]);

  useEffect(() => {
    getDisabilities()
      .then((response) => {
        setDisabilityList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    disabilityList.status === "success" && (
      <select>
        {disabilityList.data.map((d) => (
          <option key={d.disability_id} value={d.disability_name}>
            {d.disability_name}
          </option>
        ))}
      </select>
    )
  );
};
