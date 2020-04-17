import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "author", label: "Author", minWidth: 100 },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    format: (value) => value.toLocaleString(),
  },
  {
    id: "keywords",
    label: "Keywords",
    minWidth: 170,
    format: (value) => value.toLocaleString(),
  },
];

function createData(title, author, date, keywords) {
  return { title, author, date, keywords };
}

const rows = [
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
  createData(
    "Understanding Business Analytics Success and Impact: A Qualitative Study",
    "Rachida F. Parks",
    "November 2017",
    "Business, analytics, Success factors, Grounded Theory"
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  block: {
    marginTop: "5%",
    padding: "0 5%",
  },
  title: {
    marginLeft: "1%",
    paddingBottom: "1%",
    fontWeight: "bold",
  },
  head: {
    backgroundColor: "primary",
  },
  body: {
    fontSize: "1.1em ",
    maxWidth: "300px",
  },
});

export default function TableResults() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid item container className={classes.block}>
      <Typography variant="h4" color="primary" className={classes.title}>
        Results from Scopus
      </Typography>
      <Paper className={classes.root} elevation={0}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className={classes.head}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            className={classes.body}
                            key={column.id}
                            align={column.align}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  );
}
