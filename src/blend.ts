export type Blend<T extends object[]> = {
  [K in keyof T]: (
    & T[K]
    & { [P in Exclude<keyof UnionExceptIndex<T, K & number>, keyof T[K]>]?: never }
  );
}[number];

// Helper: union of all objects except the one at index I
type UnionExceptIndex<T extends any[], I extends number> = Exclude<
  T[number],
  T[I]
>;
