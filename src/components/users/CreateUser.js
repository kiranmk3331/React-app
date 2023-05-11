import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";
import RoleSelect from "./RoleSelect";

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

const CreateUser = ({
  userName,
  setUserName,
  userEmail,
  setUserEmail,
  fetchUsers,
}) => {
  const [open, setOpen] = useState(false);
  const [roleId, setRoleId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { user_name: userName, email: userEmail, role_id: roleId };
    await axios.post("/users", data);
    await fetchUsers();
    setUserName("");
    setUserEmail("");
    setOpen(false);
  };

  return (
    <div className="add-modal">
      <Button onClick={handleOpen}>Create Role</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a New User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit} className="modal-form ">
              <label>
                User Name:
                <input
                  type="text"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  value={userEmail}
                  onChange={(event) => setUserEmail(event.target.value)}
                  required
                />
              </label>
              <br />
              <RoleSelect roleId={roleId} setRoleId={setRoleId} />
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

export default CreateUser;
