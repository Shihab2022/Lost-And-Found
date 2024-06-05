"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DonutChart } from "@/components/chart/DonutChart";
import { PieChart } from "@/components/chart/PieChart";
import { ColumnChart } from "@/components/chart/ColumnChart";
const Activity = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid
            item
            xs={5}
            sx={{
              boxShadow: 5,
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            <DonutChart />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              boxShadow: 5,
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            <PieChart />
          </Grid>
          {/* <Grid
            item
            xs={11.2}
            sx={{
              boxShadow: 5,
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            <ColumnChart />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Activity;
