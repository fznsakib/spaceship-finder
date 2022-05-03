import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

import { FilterGroup } from "../sections/FilterGroup";
import { colors as colorFilters } from "../sections/FilterGroup/colors";
import { QueryStringView } from "../sections/QueryStringView";
import { ContentContainer } from "../styles/layout";
import { Title } from "../styles/styles";
import { ValueFilterState } from "../types";

const PAGE_TITLE = "Little Z's Spaceship Finder";

export type FilterState = {
  colors: Record<string, boolean>;
  maxSpeed: ValueFilterState;
  manufactureDate: ValueFilterState;
  pulseLaser: boolean;
};

export const getInitialColorsState = () => {
  const initialState: Record<string, boolean> = {};
  Object.entries(colorFilters).forEach(([name]) => {
    initialState[name] = false;
  });
  return initialState;
};

const getInitialFilterState = (): FilterState => ({
  colors: getInitialColorsState(),
  maxSpeed: {
    value: undefined,
    operation: undefined,
  },
  manufactureDate: {
    value: undefined,
    operation: undefined,
  },
  pulseLaser: false,
});

const Home: NextPage = () => {
  const [filterState, setFilterState] = useState(getInitialFilterState());

  const handleChangeColors = useCallback(
    (name: string) =>
      setFilterState((prevState) => ({
        ...prevState,
        colors: { ...prevState.colors, [name]: !prevState.colors[name] },
      })),
    [setFilterState]
  );

  const handleClearColors = useCallback(
    () =>
      setFilterState((prevState) => ({
        ...prevState,
        colors: getInitialColorsState(),
      })),
    [setFilterState]
  );

  const handleChangeMaxSpeed = useCallback(
    ({ value, operation }: ValueFilterState) =>
      setFilterState((prevState) => ({
        ...prevState,
        maxSpeed: { value, operation },
      })),
    [setFilterState]
  );

  const handleChangeManufactureDate = useCallback(
    ({ value, operation }: ValueFilterState) =>
      setFilterState((prevState) => ({
        ...prevState,
        manufactureDate: { value, operation },
      })),
    [setFilterState]
  );

  const handleChangePulseLaser = useCallback(
    (value: boolean) =>
      setFilterState((prevState) => ({
        ...prevState,
        pulseLaser: value,
      })),
    [setFilterState]
  );

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer>
        <Title>{PAGE_TITLE} 🚀</Title>
        <FilterGroup
          filterState={filterState}
          colorsOnChange={handleChangeColors}
          colorsOnClear={handleClearColors}
          maxSpeedOnChange={handleChangeMaxSpeed}
          manufactureDateOnChange={handleChangeManufactureDate}
          pulseLaserOnChange={handleChangePulseLaser}
        />
        <QueryStringView filterState={filterState} />
      </ContentContainer>
    </>
  );
};

export default Home;
