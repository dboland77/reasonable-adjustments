import React from "react";
import {useSelector} from 'react-redux'

export const DisabilityDropdown = () => {
  
  const disabilityList = useSelector(state=>state.disability.disabilityList)

  return (
      <select>
        {disabilityList.map((d) => (
          <option key={d.disability_id} value={d.disability_name}>
            {d.disability_name}
          </option>
        ))}
      </select>
  );
};
