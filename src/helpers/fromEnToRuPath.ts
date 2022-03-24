export default function fromEnToRuPath(enPath: string) {
  const normalizedRuPath = enPath.replace("/en", "/").replace(/\/\//g, "/");
  return normalizedRuPath;
}
