import React from "react";
import { useSelector } from "react-redux";

export const DisabilityDropdown = () => {
  const disabilityList = useSelector(
    (state) => state.disability.disabilityList
  );

  return (
    <select>
      {disabilityList.map((d) => (
        <option key={d} value={d}>
          {d}
        </option>
      ))}
    </select>
  );
};
