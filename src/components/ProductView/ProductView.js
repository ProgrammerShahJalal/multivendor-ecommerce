import {  Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ProductView = ({openQuickView, handleQuickViewClose, product}) => {
    const {title} = product;
    return (
        <div>
      <Modal
        open={openQuickView}
        onClose={handleQuickViewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{marginX:'auto'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
    );
};

export default ProductView;