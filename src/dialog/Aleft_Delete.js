import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@mui/material";
import "../css/Address.css";
import { number } from "yup/lib/locale";
import axios from "axios";
export default function Aleft_Delete(props) {
  const handleClose = () => {
    props.setOpen(false);
  };
  const ip = "http://localhost:8080";
  const deleteDH = () => {
    axios.delete(ip + `/DeleteDonHang/${props._id}`);
    props.setChxDelete(true);
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="sm"
    >
      <DialogContent>
        <div className="img_aleft"></div>
        <div className="address_title" style={{textAlign: "center", margin: "20px 0px 10px 0px"}}>
          <p>Bạn chắc chắn muốn xóa đơn hàng này không ?</p>
        </div>
      </DialogContent>
      <DialogActions style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", padding: "20px 0px"}}>
        <Button
          variant="outlined"
          className="btn_add_cancel_delete"
          onClick={handleClose}
        >
          Hủy
        </Button>
        <Button
          onClick={deleteDH}
          variant="outlined"
          className="btn_add_oke_delete"
          color="primary"
        >
          Chắc chắn
        </Button>
      </DialogActions>
    </Dialog>
  );
}
