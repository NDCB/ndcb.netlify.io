import { isNotNull } from "@ndcb/util";

import { statSync, ensureFileSync } from "fs-extra";

import {
  AbsolutePath,
  absolutePathEquals,
  absolutePathBaseName,
  absolutePathToString,
  pathExists,
  normalizedAbsolutePath,
} from "./absolutePath";

const FILE: unique symbol = Symbol();

/**
 * A file representation in the file system.
 *
 * The file and its path may not exist.
 */
export interface File {
  readonly path: AbsolutePath;
  readonly [FILE]: true;
}

export const isFile = (element: unknown): element is File =>
  typeof element === "object" && isNotNull(element) && !!element[FILE];

export const file = (path: AbsolutePath): File => ({
  path,
  [FILE]: true,
});

export const normalizedFile = (path: string): File =>
  file(normalizedAbsolutePath(path));

export const filePath = (file: File): AbsolutePath => file.path;

export const fileToString = (file: File): string =>
  absolutePathToString(filePath(file));

export const fileEquals = (f1: File, f2: File): boolean =>
  absolutePathEquals(filePath(f1), filePath(f2));

export const fileExists = (file: File): boolean => {
  const path = filePath(file);
  return pathExists(path) && statSync(absolutePathToString(path)).isFile();
};

export const ensureFile = (file: File): void =>
  ensureFileSync(absolutePathToString(filePath(file)));

export const fileName = (file: File): string =>
  absolutePathBaseName(filePath(file));