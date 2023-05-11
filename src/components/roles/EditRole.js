import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";
import { Edit } from "react-feather";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditRole = ({
  fetchRoles,
  id,
  roleName,
  roleDescription,
  setRoleDescription,
  setRoleName,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    fetchRole();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setRoleName("");
    setRoleDescription("");
  };

  const fetchRole = async () => {
    let res = await axios.get(`/roles/${id}`, { id });
    setRoleName(res.data.name);
    setRoleDescription(res.data.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name: roleName, description: roleDescription };
    await axios
      .put(`/roles/${id}`, data)
      .then((res) => {
        handleClose();
        fetchRoles();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="add-role">
      <Edit className="role-edit" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a New Role
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit} className="role-form">
              <label>
                Role Name:
                <input
                  type="text"
                  value={roleName}
                  onChange={(event) => setRoleName(event.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Role Description:
                <input
                  type="text"
                  value={roleDescription}
                  onChange={(event) => setRoleDescription(event.target.value)}
                  required
                />
              </label>
              <br />
              <span>
                <input type="submit" value="Update" />
                <input type="button" value="Cancel" onClick={handleClose} />
              </span>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default EditRole;
