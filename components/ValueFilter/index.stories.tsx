import React, { useState } from "react";

import { ValueFilterState } from "../../types";
import { ValueFilter } from "./index";

export default {
  title: "Components/ValueFilter",
  component: ValueFilter,
};

export const Primary = () => {
  const initialState: ValueFilterState = {
    value: undefined,
    operation: undefined,
  };

  const [numberFilter, setNumberFilter] = useState<ValueFilterState>(initialState);

  const handleNumberFilterChange = (filter: ValueFilterState) => setNumberFilter(filter);

  const [dateFilter, setDateFilter] = useState<ValueFilterState>(initialState);

  const handleDateFilterChange = (filter: ValueFilterState) => setDateFilter(filter);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "300px", marginBottom: "40px" }}>
        <ValueFilter
          state={numberFilter}
          label="Number filter"
          onChange={handleNumberFilterChange}
          min={50}
          max={200}
          valueType="number"
          options={{ Exactly: "eq", "Less than": "lt", "Greater than": "gt" }}
        />
      </div>
      <div style={{ width: "300px" }}>
        <ValueFilter
          state={dateFilter}
          label="Date filter"
          onChange={handleDateFilterChange}
          min="1990-01-01"
          max="2025-12-31"
          valueType="date"
          options={{ Exactly: "eq", Before: "lt", After: "gt" }}
        />
      </div>
    </div>
  );
};
