import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '0.375rem',
  width: '80%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};

export default function Service() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=' w-full min-h-[60vh] max-h-[90vh] p-10  grid md:grid-cols-4 grid-cols-3 gap-4'>
            <div className='h-10 justify-between flex flex-col col-span-3'>
              <div className='flex gap-5 text-2xl'>
                <img src="https://www.kfc.lk/images/icons/trolley.png" alt="" />
                <p>Your Cart</p>
              </div>
              <hr />
            </div>
            <div className='h-10 justify-between flex flex-col md:col-span-1 col-span-3 '>
              <div className='flex gap-1 text-2xl'>
                <img src="https://www.kfc.lk/images/icons/file.png" width={40} alt="" />
                <p>Order Summary</p>
              </div>
              <hr />
              <div className='flex flex-col gap-4 pt-5 justify-between'>
                <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full p-3 '>Enter Your Coopen Code</button>

                <div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                    <p>Totle</p><p>Rs: 350.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                    <p>Delivery Charge</p><p>Rs: 350.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                    <p>Packing Charge</p><p>Rs: 350.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                    <p>Discount amount	</p><p>Rs: 350.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50 text-red-400 text-2xl items-center'>
                    <p className='flex gap-3 items-center'><img src="https://www.kfc.lk/images/icons/stamp.png" alt="" width={50} />Totle</p><p>Rs: 350.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 border-b-2 p-3 bg-gray-50'>
                    <p>Review your order before checkout.</p>
                  </div>
                </div>

                <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full p-3 '>Minimum order value should be Rs.500</button>

              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}