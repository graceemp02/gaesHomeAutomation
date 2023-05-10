/** @format */

import { ListItem, ListItemText, Switch } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Light = ({ light, room, data }) => {
  const [value, setValue] = useState(false);
  useEffect(() => {
    data && setValue(data.btn === '1' ? true : false);
  }, [data]);
  const handleToggle = async e => {
    const bool = e.target.checked;
    const fd = new FormData();
    fd.append('id', room);
    fd.append('btn', `btn${light}`);
    fd.append('val', bool ? 1 : 0);
    await axios
      .post('main.php', fd)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    setValue(bool);
  };
  return (
    <ListItem divider>
      <ListItemText primary={`Light ${light}`} />
      <Switch onChange={handleToggle} checked={value} />
      <CircleIcon htmlColor={data && (data.ind === '1' ? 'red' : 'gray')} />
    </ListItem>
  );
};

export default Light;
