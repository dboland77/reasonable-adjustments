import React, { useState, useEffect } from "react";
// import DisabilityDataService from "../../services/disabilities.service.js"

export const DisabilityDropdown = () => {
  const [disabilityList, setDisabilityList] = useState([]);

  useEffect(() => {
    retrieveDisabilities();
  }, []);

  const retrieveDisabilities = () => {
    // DisabilityDataService.getAll()
    //   .then(response => {
    //     setDisabilityList(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  };
  return (
    <select>
      {disabilityList.map(d=><option key={d.id} value={d.disability_name}>{d.disability_name}</option>)}
      
      </select>
  )
}
