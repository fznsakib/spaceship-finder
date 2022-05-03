import { TEST } from "../lib/query";
import { FilterState } from "../pages";
import { ValueFilterState } from "../types";

describe("getColorQueryParameters", () => {
  const parameterName = "colors";
  it("parses one color correctly", () => {
    const colors = { red: true, blue: false, green: false };
    const expected = `${parameterName}=red`;

    expect(TEST.getColorQueryParameters(colors)).toBe(expected);
  });
  it("parses multiple colors correctly", () => {
    const colors = { red: true, green: true, blue: false };
    const expected = `${parameterName}=red,green`;

    expect(TEST.getColorQueryParameters(colors)).toBe(expected);
  });
  it("returns undefined for no colors", () => {
    const colors = { red: false, green: false, blue: false };

    expect(TEST.getColorQueryParameters(colors)).toBe(undefined);
  });
});

describe("getValueQueryParameters", () => {
  const parameterName = "values";
  it("parses exact value correctly", () => {
    const valueFilter: ValueFilterState = { value: "20", operation: "eq" };
    const expected = `${parameterName}=20`;

    expect(TEST.getValueQueryParameters(valueFilter, parameterName)).toBe(expected);
  });
  it("parses less than value correctly", () => {
    const valueFilter: ValueFilterState = { value: "20", operation: "lt" };
    const expected = `${parameterName}[lt]=20`;

    expect(TEST.getValueQueryParameters(valueFilter, parameterName)).toBe(expected);
  });
  it("parses greater than value correctly", () => {
    const valueFilter: ValueFilterState = { value: "20", operation: "gt" };
    const expected = `${parameterName}[gt]=20`;

    expect(TEST.getValueQueryParameters(valueFilter, parameterName)).toBe(expected);
  });
  it("returns undefined for no value and no operation", () => {
    const valueFilter: ValueFilterState = { value: undefined, operation: undefined };

    expect(TEST.getValueQueryParameters(valueFilter, parameterName)).toBe(undefined);
  });

  it("returns undefined for valid value and no operation", () => {
    const valueFilter: ValueFilterState = { value: "20", operation: undefined };

    expect(TEST.getValueQueryParameters(valueFilter, parameterName)).toBe(undefined);
  });

  it("returns undefined for no value and valid operation", () => {
    const valueFilter: ValueFilterState = { value: undefined, operation: "eq" };

    expect(TEST.getValueQueryParameters(valueFilter, parameterName)).toBe(undefined);
  });
});

describe("getBooleanQueryParameters", () => {
  const parameterName = "valid";
  it("parses true value correctly", () => {
    const expected = `${parameterName}=true`;
    expect(TEST.getBooleanQueryParameter(true, parameterName)).toBe(expected);
  });
  it("returns undefined for false value", () => {
    expect(TEST.getBooleanQueryParameter(false, parameterName)).toBe(undefined);
  });
});

describe("convertFilterToQueryString", () => {
  const baseUrl = "/spaceships";
  it("converts for one filtered parameter correctly", () => {
    const filterState: FilterState = {
      colors: { red: false, green: false, blue: false },
      maxSpeed: { value: "50", operation: "gt" },
      manufactureDate: {},
      pulseLaser: false,
    };
    const expected = `${baseUrl}?maxSpeed[gt]=50`;

    expect(TEST.convertFilterToQueryString(filterState, baseUrl)).toBe(expected);
  });
  it("converts for some filtered parameters correctly", () => {
    const filterState: FilterState = {
      colors: { red: true, green: false, blue: true },
      maxSpeed: { value: "50", operation: "gt" },
      manufactureDate: {},
      pulseLaser: true,
    };
    const expected = `${baseUrl}?colors=red,blue&maxSpeed[gt]=50&pulseLaser=true`;

    expect(TEST.convertFilterToQueryString(filterState, baseUrl)).toBe(expected);
  });
  it("converts for all filtered parameters correctly", () => {
    const filterState: FilterState = {
      colors: { red: false, green: false, blue: true },
      maxSpeed: { value: "50", operation: "eq" },
      manufactureDate: { value: "10", operation: "gt" },
      pulseLaser: true,
    };
    const expected = `${baseUrl}?colors=blue&maxSpeed=50&manufactureDate[gt]=10&pulseLaser=true`;

    expect(TEST.convertFilterToQueryString(filterState, baseUrl)).toBe(expected);
  });
  it("returns the base url when no parameters are set", () => {
    const filterState: FilterState = {
      colors: { red: false, green: false, blue: false },
      maxSpeed: {},
      manufactureDate: {},
      pulseLaser: false,
    };

    expect(TEST.convertFilterToQueryString(filterState, baseUrl)).toBe(baseUrl);
  });
});
