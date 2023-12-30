const themeType = {
  BASIC: "basic",
  PRO: "pro",
  STYLE: "style",
};

const themes = {
  STYLE: { name: "Gradient", type: themeType.STYLE },
  CUSTOM: { name: "custom", type: themeType.PRO },
  SOLID: { name: "solid", type: themeType.BASIC },
  PHOTO: { name: "photo", type: themeType.BASIC },
  GRADIENT: { name: "gradient", type: themeType.BASIC },
  COVER: { name: "cover", type: themeType.BASIC },
  BARANIME: { name: "bar anime", type: themeType.BASIC },
  STARRYNIGHT: { name: "starry night", type: themeType.BASIC },
  PATTERN: { name: "pattern", type: themeType.BASIC },
};

export { themeType, themes };
