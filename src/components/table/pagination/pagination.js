import * as React from "react";
import Pagination from "@mui/material/Pagination";
import "./pagination.css";
import Stack from "@mui/material/Stack";
export default function PaginationControlled({ page, setPage, dataUser }) {
  const handleChange = (event, value) => {
    setPage(value);
    if (dataUser.length > 5) {
      setPage(value);
    }
  };

  return (
    <Stack spacing={2}>
      <Pagination
        className="pagination"
        count={3}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
