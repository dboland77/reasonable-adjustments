import React from 'react';
import { setDisabilities } from '../services/user.service';
import { useSelector } from 'react-redux';

export const BulkInsertButton = () => {
    const disabilityList = useSelector(state=>state.disability.disabilityList)
    const handleClick = () => {
        setDisabilities(disabilityList)
      .then((response) => {
        console.log(response.data.msg);
      })
      .catch((e) => {
        alert(e);
      });
    }
    return (
        <button onClick = {handleClick}>Upload</button>
    )
}

