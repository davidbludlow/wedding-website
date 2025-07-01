// type Blend<T1, T2> =
//   | (T1 & { [K in Exclude<keyof T2, keyof T1>]?: never })
//   | (T2 & { [K in Exclude<keyof T1, keyof T2>]?: never });
type Blend<T1, T2, T3 = never> =
  | (T1 & { [K in Exclude<keyof T2 | keyof T3, keyof T1>]?: never })
  | (T2 & { [K in Exclude<keyof T1 | keyof T3, keyof T2>]?: never })
  | (T3 & { [K in Exclude<keyof T1 | keyof T2, keyof T3>]?: never });
