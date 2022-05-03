import React, { useState } from "react";

import { getInitialColorsState } from "../../pages";
import { ColorFilter } from "./index";

export default {
  title: "Components/ColorFilter",
  component: ColorFilter,
};

export const Primary = () => {
  const [colorFilter, setColorFilter] = useState<Record<string, boolean>>(getInitialColorsState());

  const handleChange = (name: string) =>
    setColorFilter((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  const handleClear = () => setColorFilter(getInitialColorsState());

  return (
    <div style={{ width: "300px" }}>
      <ColorFilter state={colorFilter} onChange={handleChange} onClear={handleClear} />
    </div>
  );
};
