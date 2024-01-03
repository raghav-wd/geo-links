const themeType = {
  BASIC: "basic",
  PRO: "pro",
  STYLE: "style",
};

const themes = {
  STYLE: { name: "Gradient", type: themeType.STYLE, animation: false },
  CUSTOM: { name: "custom", type: themeType.PRO, animation: false },
  SOLID: { name: "solid", type: themeType.BASIC, animation: false },
  PHOTO: { name: "photo", type: themeType.BASIC, animation: false },
  GRADIENT: { name: "gradient", type: themeType.BASIC, animation: false },
  BACKGROUND: { name: "background", type: themeType.BASIC, animation: false },
  COVER: { name: "cover", type: themeType.BASIC, animation: false },
  BARANIME: { name: "bar anime", type: themeType.BASIC, animation: true },
  STARRYNIGHT: { name: "starry night", type: themeType.BASIC, animation: true },
  PATTERN: { name: "pattern", type: themeType.BASIC, animation: false },
  CLOUDS: { name: "clouds", type: themeType.BASIC, animation: true },
  NEUMORPHIC: { name: "neumorphic", type: themeType.BASIC, animation: false },
  PINBOARD: { name: "pinboard", type: themeType.BASIC, animation: false },
};

export { themeType, themes };
