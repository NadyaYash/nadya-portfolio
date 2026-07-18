export const DEFAULT_LOCALE = "en";
export const LOCALES = ["en", "de"];

const trimTrailingSlash = (path) => {
  if (!path || path === "/") {
    return "/";
  }

  return path.replace(/\/+$/, "") || "/";
};

export const getLocaleFromPath = (path = "/") => {
  const normalized = trimTrailingSlash(path);
  return normalized === "/de" || normalized.startsWith("/de/") ? "de" : "en";
};

export const stripLocaleFromPath = (path = "/") => {
  const normalized = trimTrailingSlash(path);

  if (normalized === "/de") {
    return "/";
  }

  if (normalized.startsWith("/de/")) {
    return normalized.replace(/^\/de/, "") || "/";
  }

  return normalized;
};

export const withLocalePath = (path = "/", locale = DEFAULT_LOCALE) => {
  if (!path || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }

  if (path.startsWith("#")) {
    return locale === "de" ? `/de/${path}`.replace("/#", "#") : path;
  }

  const [pathWithoutHash, hash = ""] = path.split("#");
  const [pathname, query = ""] = pathWithoutHash.split("?");
  const basePath = stripLocaleFromPath(pathname || "/");
  const prefix = locale === "de" ? "/de" : "";
  const localizedPath = basePath === "/" ? `${prefix || "/"}` : `${prefix}${basePath}`;
  const queryPart = query ? `?${query}` : "";
  const hashPart = hash ? `#${hash}` : "";

  return `${localizedPath}${queryPart}${hashPart}` || "/";
};

export const getAlternatePaths = (path = "/") => {
  const basePath = stripLocaleFromPath(path);

  return {
    en: withLocalePath(basePath, "en"),
    de: withLocalePath(basePath, "de"),
    "x-default": withLocalePath(basePath, "en"),
  };
};
