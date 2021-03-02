import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Container,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const Import = (props) => {
  // fill out this component
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="sm">
      <Button variant="contained" color="primary" onClick={props.fetchMake}>
        Import
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, idx) => (
            <TableRow key={make.id}>
              <TableCell component="th" scope="row">
                {make.MakeId}
              </TableCell>
              <TableCell align="right">{make["MakeName"]}</TableCell>
              <TableCell align="right">
                <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                >
                  <MoreVert />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                >
                  <p>Delete</p>
                </Menu>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Import;
