import React from "react";
import qs from "qs";

import { Box } from "../../elements/Box";
import { convertFilterToQueryString } from "../../lib/query";
import { FilterState } from "../../pages";
import { BoxContentContainer, QueryStringContainer } from "./styles";

type QueryStringViewProps = {
  filterState: FilterState;
};

const BASE_URL = "/spaceships";

export const QueryStringView: React.FC<QueryStringViewProps> = ({ filterState }) => {
  const queryString = convertFilterToQueryString(filterState, BASE_URL);
  const queryStringJSON = JSON.stringify(
    qs.parse(queryString.replace(BASE_URL, "").replace("?", ""), { comma: true }),
    null,
    2
  );

  const filterInUse = queryString !== BASE_URL;

  return (
    <Box>
      <BoxContentContainer>
        <h3>Query String Result:</h3>
        <QueryStringContainer>{filterInUse ? queryString : BASE_URL}</QueryStringContainer>
        <h3>
          Converted to JSON using{" "}
          <a
            href="https://github.com/ljharb/qs"
            target="_blank"
            style={{ color: "blue", textDecoration: "underline" }}
            rel="noreferrer"
          >
            <code>qs</code>
          </a>{" "}
          library for possible server-side usage:
        </h3>
        <QueryStringContainer>{queryStringJSON}</QueryStringContainer>
      </BoxContentContainer>
    </Box>
  );
};
