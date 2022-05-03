export type Operation = "eq" | "lt" | "gt";

export interface ValueFilterState {
  value?: string;
  operation?: Operation;
}
