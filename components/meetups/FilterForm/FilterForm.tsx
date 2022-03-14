import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Button from "../../ui/Button/Button";

const FilterForm = ({ onDateChange }) => {
  
  const [filteredDate, setFilteredDate] = useState({
    year: '',
    month: '',
    reset: true
  })

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilteredDate(prevValue => {
      return {
        ...prevValue, [name]: value, reset: false
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    onDateChange(filteredDate)
  }

  const resetFilter = () => {
    setFilteredDate({
      year: '',
      month: '',
      reset: true
    })
  }

  return (
    <form onSubmit={ submitHandler }>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="yearFilter">Year</InputLabel>
            <Select
              labelId="yearFilter"
              onChange={ handleChange }
              value={ filteredDate.year }
              name="year"
            >
              <MenuItem value="2020">2020</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="monthFilter">Month</InputLabel>
            <Select
              labelId="monthFilter"
              onChange={ handleChange }
                value={ filteredDate.month }
                name="month"
            >
              <MenuItem value="January">January</MenuItem>
              <MenuItem value="February">February</MenuItem>
              <MenuItem value="March">March</MenuItem>
              <MenuItem value="April">April</MenuItem>
              <MenuItem value="May">May</MenuItem>
              <MenuItem value="June">June</MenuItem>
              <MenuItem value="July">July</MenuItem>
              <MenuItem value="August">August</MenuItem>
              <MenuItem value="September">September</MenuItem>
              <MenuItem value="October">October</MenuItem>
              <MenuItem value="November">November</MenuItem>
              <MenuItem value="December">December</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={5}>
          <Button onButtonClick={resetFilter}>All</Button>
        </Grid>
        <Grid item xs={5}>
          <Button buttonType="submit">Filter</Button>
        </Grid>
      </Grid>
      
      
  </form>
  )
};
export default FilterForm;