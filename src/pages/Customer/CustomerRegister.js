import React, { useState } from 'react';
import { Box, Button, TextField, MenuItem, Grid } from '@mui/material';

const Form = () => {
  // const theme = useTheme();
  const initialFormData = {
    code: '',
    name: '',
    phone_1: '',
    phone_2: '',
    type: '',
    note: '',
    city: '',
    kafyl_name: '',
    kafyl_phone: '',
    state: '',
    address: '',
    cobon: '',
    limit_loan_price: '',
    limit_loan_day: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Registered:', formData);
    setFormData(initialFormData); // Reset form
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <Box m="20px">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="گرووپ"
              name="category"
              select
              value={formData.category}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            >
              <MenuItem value="">No Category</MenuItem>
              <MenuItem value="regular">ناوبازاڕ</MenuItem>
              <MenuItem value="hypermarket">هایپەرمارکیت</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="کۆد"
              name="code"
              value={formData.code}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="ناو"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="مۆبایل٢"
              name="phone_2"
              value={formData.phone_2}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="مۆبایل١"
              name="phone_1"
              value={formData.phone_1}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="شار"
              name="city"
              select
              value={formData.city}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2 }}
            >
              <MenuItem value="sulaimani">سلێمانی</MenuItem>
              <MenuItem value="erbil">هەولێر</MenuItem>
              <MenuItem value="dohuk">دهۆک</MenuItem>
              <MenuItem value="halabja">هەڵەبجە</MenuItem>
              <MenuItem value="raniya">ڕانیە</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="ناونیشان"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="جۆر"
              name="type"
              select
              value={formData.type}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2 }}
            >
              <MenuItem value="buy">کڕین</MenuItem>
              <MenuItem value="sell">فرۆشتن</MenuItem>
              <MenuItem value="both">هەردووکی</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="حاڵەت"
              name="state"
              select
              value={formData.state}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            >
              <MenuItem value="active">چالاک</MenuItem>
              <MenuItem value="inactive">ناچالاک</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="number"
              label="مۆڵەتی قەرز"
              name="limit_loan_day"
              value={formData.limit_loan_day}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="number"
              label="سنوری قەرز"
              name="limit_loan_price"
              value={formData.limit_loan_price}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="number"
              label="مۆبایلی کەفیل"
              name="kafyl_phone"
              value={formData.kafyl_phone}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="text"
              label="ناوی کەفیل"
              name="kafyl_name"
              value={formData.kafyl_name}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          label="تێبینی"
          name="note"
          value={formData.note}
          onChange={handleChange}
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        <Box marginTop={"20px"}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Button fullWidth type="submit" color="success" variant="contained">
                تۆمارکردن
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained" color="warning" type="button" onClick={resetForm}>
                پاکردنەوە
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
