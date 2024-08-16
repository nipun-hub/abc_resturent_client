import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { StoreContext } from '../../context/StoreContext';
import { AddCircleOutline, DeleteForever, RemoveCircleOutline } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '0.375rem',
  width: '80%',
  bgcolor: 'background.paper',
};

export default function Service() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { cartItem, food_list, addToCart, removeFromCart, deleteFromCart, getTotlCartAmmount } = React.useContext(StoreContext);

  return (
    <div>
      service
    </div>
  );
}