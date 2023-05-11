import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";

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

const CreateRole = ({ fetchRoles }) => {
  const [open, setOpen] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name: roleName, description: roleDescription };
    await axios.post("/roles", data);
    await fetchRoles();
    setOpen(false);
  };

  return (
    <div className="add-role">
      <Button onClick={handleOpen}>Create Role</Button>
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
              <input type="submit" value="Create" />
              <input type="button" value="Cancel" onClick={handleClose} />
              </span>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateRole;
