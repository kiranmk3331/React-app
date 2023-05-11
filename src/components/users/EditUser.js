import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";
import RoleSelect from "./RoleSelect";
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

const EditUser = ({
  userName,
  setUserName,
  userEmail,
  setUserEmail,
  fetchUsers,
  id,
}) => {
  const [open, setOpen] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState("");
  const handleOpen = () => {
    fetchUser();
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false);
    setUserEmail("")
    setUserName("")
    setCurrentRoleId("")
  };

  const fetchUser = async () => {
    let res = await axios.get(`/users/${id}`, { id });
    setUserName(res.data.user_name);
    setUserEmail(res.data.email);
    setCurrentRoleId(res.data.role_id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_name: userName,
      email: userEmail,
      role_id: currentRoleId,
    };
    await axios.put(`/users/${id}`, data);
    await fetchUsers();
    setUserName("");
    setUserEmail("");
    setCurrentRoleId("");
    setOpen(false);
  };

  return (
    <div className="add-modal">
      <Edit className="table-edit" onClick={handleOpen} />
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
              <RoleSelect roleId={currentRoleId} setRoleId={setCurrentRoleId} />
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

export default EditUser;
