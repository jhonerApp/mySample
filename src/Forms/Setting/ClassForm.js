import React from "react";
import TextField from "@material-ui/core/TextField";

import { useSnackbar } from "notistack";
import ThemeButton from "../../Hoc/ThemeButton";
import Grid from "@material-ui/core/Grid";
// import ApiService from "../../Context/ApiService";
import Forms from "../../Hoc/Forms";

const initialValue = {
  id: "",
  class_name: "",
};

export default function ClassForm({ ...props }) {
  const { enqueueSnackbar } = useSnackbar();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("class_name" in fieldValues)
      temp.class_name = fieldValues.class_name ? "" : "this field is required.";
    if ("id" in fieldValues)
      temp.id = fieldValues.class_name ? "" : "this field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const {
    errors,
    setErrors,
    values,
    handleInputChange,
    resetForm,
    handleSubmit,
    register
  } = Forms(initialValue, validate);

  const onSubmit = (data) => {
    if (validate()) {
      // ApiService.AddData(
      //   "api/SchoolClass/InsertSchoolClassName",
      //   JSON.stringify(data)
      // )
      //   .then((res) => {
      //     resetForm();
      //     enqueueSnackbar("Successfully Inserted", {
      //       variant: "success",
      //     });
      //   })
      //   .catch((err) => {
      //     console.log("Error");
      //     enqueueSnackbar("API Error, Please check connection", {
      //       variant: "error",
      //     });
      //   });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="standard-full-width"
        label="Class name"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        name="class_name"
        inputRef={register}
        value={values.class_name}
        onChange={handleInputChange}
        {...(errors.class_name && {
          error: true,
          helperText: errors.class_name,
        })}
      />

      <Grid container direction="row" justify="flex-end" alignItems="flex-end">
        <ThemeButton type="submit" theme="primary" icon="addIcon" text="SAVE" />
      </Grid>
    </form>
  );
}
