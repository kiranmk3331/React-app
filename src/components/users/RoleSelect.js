import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function RoleSelect({ roleId, setRoleId }) {
  const [roles, setRoles] = useState([]);

  const fetchRoles = async () => {
    const res = await axios.get("/roles");
    setRoles(res.data);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleChange = (event) => {
    setRoleId(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150, minHeight: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={roleId}
          label="Role"
          onChange={handleChange}
          required
        >
          {roles.map((role) => (
            <MenuItem key={role.id} value={role.id}>
              {role.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
