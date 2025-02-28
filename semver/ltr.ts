// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
import type { Range, SemVer, SemVerRange } from "./types.ts";
import { lt } from "./lt.ts";
import { rangeMin } from "./range_min.ts";

/** Less than range comparison */
export function ltr(
  version: SemVer,
  range: SemVerRange | Range,
): boolean {
  return lt(version, rangeMin(range));
}
