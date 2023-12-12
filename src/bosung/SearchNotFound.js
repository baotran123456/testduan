import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@mui/material';

import Hinh from "../assets/logo_cty.png";

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
    searchQuery: PropTypes.string,
};

export default function SearchNotFound({ searchQuery = '', ...other }) {
    return (
        <Paper {...other}>
            <Typography style={{paddingTop: "50px"}} gutterBottom align="center" variant="subtitle1">
                <img src={Hinh} width="150" height="150" />
            </Typography>
            <Typography style={{paddingBottom: "50px"}} variant="body2" align="center" fontSize='20px'>
                Giỏ hàng hiện tại không có sản phẩm nào...
            </Typography>
        </Paper>
    );
}
