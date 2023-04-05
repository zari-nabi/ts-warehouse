export interface Data<T> {
  (res: T): void;
}
export interface GenericState<T> {
  data?: T;
  status: "loading" | "finished" | "error"| "pending";
}
