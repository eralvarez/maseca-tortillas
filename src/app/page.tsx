"use client";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from "@mui/material";
import { ChangeEvent, useReducer } from "react";

interface State {
  flourGrams: number;
  waterGrams: number;
  tortillas: number;
}

type Action = {
  type: "changeTortilla" | "changeFlourGrams" | "changeWaterGrams";
  payload: number;
};

const parseNumber = (value: number) => Number(value.toFixed(1));

export default function Home() {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      const response = { ...state };

      switch (action.type) {
        case "changeTortilla":
          response.tortillas = action.payload;
          response.flourGrams = parseNumber((150 * action.payload) / 8);
          response.waterGrams = parseNumber((165 * action.payload) / 8);
          break;
        case "changeFlourGrams":
          response.flourGrams = action.payload;
          response.tortillas = parseNumber((8 * action.payload) / 150);
          response.waterGrams = parseNumber((165 * action.payload) / 150);
          break;
        case "changeWaterGrams":
          response.waterGrams = action.payload;
          response.tortillas = parseNumber((8 * action.payload) / 165);
          response.flourGrams = parseNumber((150 * action.payload) / 165);
        default:
          break;
      }

      return response;
    },
    {
      flourGrams: 150,
      waterGrams: 165,
      tortillas: 8,
    }
  );

  const handleChangeTortillas = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "changeTortilla", payload: Number(event.target.value) });
  };

  const handleChangeFlourGrams = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "changeFlourGrams", payload: Number(event.target.value) });
  };

  const handleChangeWaterGrams = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "changeWaterGrams", payload: Number(event.target.value) });
  };

  return (
    <Box p={2} sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            width: "500px",
          },
        })}
      >
        <CardHeader title="calculadora de tortillas" />
        <CardContent>
          <Stack direction="column" spacing={2}>
            <TextField
              label="tortillas"
              variant="standard"
              type="number"
              inputProps={{ min: 0 }}
              fullWidth
              value={state.tortillas}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChangeTortillas}
            />
            <TextField
              label="gramos de harina"
              variant="standard"
              type="number"
              inputProps={{ min: 0 }}
              fullWidth
              value={state.flourGrams}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChangeFlourGrams}
            />
            <TextField
              label="agua en gramos"
              variant="standard"
              type="number"
              inputProps={{ min: 0 }}
              fullWidth
              value={state.waterGrams}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChangeWaterGrams}
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
