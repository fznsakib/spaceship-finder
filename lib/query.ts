import { FilterState } from "../pages";
import { ValueFilterState } from "../types";

const getColorQueryParameters = (colors: Record<string, boolean>) => {
  const query = "colors=";
  const selectedColors = Object.entries(colors)
    .filter(([, selected]) => selected)
    .map(([name]) => name)
    .join(",");

  return selectedColors ? `${query}${selectedColors}` : undefined;
};

const getValueQueryParameters = ({ value, operation }: ValueFilterState, parameterName: string) => {
  if (!value || !operation) {
    return undefined;
  }

  let query = parameterName;
  if (operation !== "eq") {
    query += `[${operation}]`;
  }

  return `${query}=${value}`;
};

const getBooleanQueryParameter = (value: boolean, parameterName: string) => {
  return value ? `${parameterName}=${value}` : undefined;
};

export const convertFilterToQueryString = (
  { colors, maxSpeed, manufactureDate, pulseLaser }: FilterState,
  baseUrl: string
) => {
  let queryParameters = [];
  queryParameters.push(
    getColorQueryParameters(colors),
    getValueQueryParameters(maxSpeed, "maxSpeed"),
    getValueQueryParameters(manufactureDate, "manufactureDate"),
    getBooleanQueryParameter(pulseLaser, "pulseLaser")
  );

  let queryString = baseUrl;
  queryParameters = queryParameters.filter((str) => str !== undefined);

  queryParameters.forEach((str, i) => {
    if (i === 0) {
      queryString += "?";
    }
    queryString += str;
    if (i < queryParameters.length - 1) {
      queryString += "&";
    }
  });

  return queryString;
};

export const TEST = {
  getColorQueryParameters,
  getValueQueryParameters,
  getBooleanQueryParameter,
  convertFilterToQueryString,
};
