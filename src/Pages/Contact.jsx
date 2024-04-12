import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Btn from "../Components/Btn";

export default function Contact({ setshow, setmessTosa }) {
  const [isLoading, setisLoading] = useState(false);
  const schema = Joi.object({
    Name: Joi.string().required().messages({
      "string.empty": "can't be empty",
    }),
    Company: Joi.string().required().messages({
      "string.empty": "can't be empty",
    }),
    Email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
      .required()
      .messages({
        "string.empty": "can't be empty",
        "string.email": "email not right ",
      }),
    Phone: Joi.string()
      .regex(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "can't be empty",
        "string.pattern.base": "number not right",
      }),
    Message: Joi.string().required().messages({
      "string.empty": "can't be empty",
    }),
    Subject: Joi.string().required().messages({
      "string.empty": "must choose one",
      "string.base": "must choose one",
    }),
  });
  const form = useForm({
    resolver: joiResolver(schema),
  });
  const { register, handleSubmit, setError, control, getValues, formState } =
    form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    setisLoading(true);
    let res = await sendMessage(data);
    if (res.message == "fail") {
      setshow(true);
      setmessTosa("error");
    } else {
      setshow(true);
      setmessTosa("message sent");
    }
    setisLoading(false);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        marginBottom: "4rem",
      }}
    >
      <Grid
        xs={12}
        container
        sx={{
          display: "flex",
          textAlign: "left",
          fontFamily: "Source Sans 3",
          fontSize: "3rem",
          fontWeight: "700",
          lineHeight: "57.6px",
          padding: "2rem 0 1rem 0",
        }}
      >
        Let’s level up your design, together
      </Grid>
      <Grid
        xs={12}
        container
        sx={{
          display: "flex",
          textAlign: "left",
          fontFamily: "Source Sans 3",
          fontSize: "1.2rem",
          fontWeight: "400",
          lineHeight: "28px",
        }}
      >
        You can reach us anytime
      </Grid>

      <Grid
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        xs={8}
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          rowGap: "8px",
          margin: "3rem 0",
        }}
      >
        <FormInput
          xs={10}
          md={5.5}
          register={register}
          errors={errors}
          label={"Name *"}
          ele="Name"
          type="Name"
        />
        <FormInput
          xs={10}
          md={5.5}
          register={register}
          errors={errors}
          label={"Company *"}
          ele="Company"
          type="Company"
        />
        <FormInput
          xs={10}
          md={5.5}
          register={register}
          errors={errors}
          label={"Email *"}
          ele="Email"
          type="Email"
        />
        <FormInput
          xs={10}
          md={5.5}
          register={register}
          errors={errors}
          label={"Phone *"}
          ele="Phone"
          type="Phone"
        />
        <RadioInput register={register} errors={errors} getValues={getValues} />
        <FormInput
          xs={10}
          md={12}
          register={register}
          errors={errors}
          label={"Message *"}
          ele="Message"
          type="Message"
          placeholder="What you need ?"
        />
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: { xs: "center", md: "end" } }}
        >
          <Btn
            type="submit"
            component={"Button"}
            disabled={isLoading ? true : false}
            xs={3}
            md={3}
            label={isLoading ? "..." : "Submit"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

function FormInput({
  register,
  img,
  label,
  errors,
  ele,
  type,
  xs,
  md,
  placeholder,
}) {
  function FormHelperTextProps(indicator) {
    return {
      sx: {
        color: "black !important",
        bgcolor: `${indicator ? "white" : "transparent"}`,
        fontSize: ".8rem",
        fontFamily: "inherit",
        fontWeight: "700",
        borderRadius: "5px",
        boxSizing: "border-box",
        padding: "5px",
      },
    };
  }
  return (
    <Grid item xs={xs} md={md} boxSizing={"border-box"} paddingBottom={1}>
      <TextField
        label={label}
        variant="standard"
        color="secondary"
        errors={errors[ele]}
        sx={{
          width: "100%",
          color: "white",
          "& label.Mui-focused": {
            color: "white",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputBase-input": { color: "white", paddingLeft: ".5rem" },
        }}
        helperText={errors[ele] ? errors[ele].message : " "}
        FormHelperTextProps={FormHelperTextProps(errors[ele])}
        type={type}
        {...register(ele)}
        focused
        placeholder={placeholder}
      />
    </Grid>
  );
}

function RadioInput({ register, getValues, errors }) {
  const [Subject, setSubject] = useState(" ");

  return (
    <Grid item xs={12} sx={{ display: "flex", flexFlow: "column" }}>
      <Box>Subject</Box>
      <FormControl sx={{ my: 2 }}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          {...register("Subject", {
            onChange: (e) => {
              setSubject(getValues("Subject"));
            },
          })}
          value={Subject}
        >
          <FormControlLabel
            sx={{ width: "23%" }}
            value="3D Sculpting"
            control={<Radio />}
            label="3D Sculpting"
            {...register("Subject")}
          />
          <FormControlLabel
            sx={{ width: "23%" }}
            value="Rigging"
            control={<Radio />}
            label="Rigging"
            {...register("Subject")}
          />
          <FormControlLabel
            sx={{ width: "23%" }}
            value="Material"
            control={<Radio />}
            label="Material"
            {...register("Subject")}
          />
          <FormControlLabel
            sx={{ width: "23%" }}
            value="Cloth Simulation"
            control={<Radio />}
            label="Cloth Simulation"
            {...register("Subject")}
          />
        </RadioGroup>

        <FormHelperText
          sx={{
            color: "black !important",
            bgcolor: `${errors.Subject ? "white" : "transparent"}`,
            fontSize: ".8rem",
            fontFamily: "inherit",
            fontWeight: "700",
            borderRadius: "5px",
            boxSizing: "border-box",
            padding: "5px",
            marginX: "0",
          }}
        >
          {errors.Subject ? errors.Subject.message : " "}
        </FormHelperText>
      </FormControl>
    </Grid>
  );
}

function sendMessage(inputs) {
  const url = "http://66.29.149.18:5030/api/v2/order";

  const data = {
    name: inputs.Name, // required  | should be String
    phone: inputs.Phone, // required | string but numbers from [0-9]
    compony: inputs.Company, // should be string
    email: inputs.Email, // required | should be email only [com/net]
    subject: inputs.Subject, // required | should be string
    message: inputs.Message, // should be string
  };
  const options = {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return {
        message: "fail",
      };
    });
}
