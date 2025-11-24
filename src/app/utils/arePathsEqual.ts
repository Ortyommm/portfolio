export default function arePathsEqual(path1: string, path2: string) {
  return cleanPath(path1) === cleanPath(path2);
}

function cleanPath(path: string) {
  if (path.slice(-1) === "/") {
    return path.slice(0, -1);
  }
  return path;
}
