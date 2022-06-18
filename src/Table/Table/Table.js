import TableContainer from "@mui/material/TableContainer";
import { StyledTable } from "./styles";

const Table = ({ children, sx }) => {
  return (
    <TableContainer sx={{ flex: 1 }} className="scrollbar-track">
      <StyledTable stickyHeader sx={sx} size="small">
        {children}
      </StyledTable>
    </TableContainer>
  );
};
export default Table;
