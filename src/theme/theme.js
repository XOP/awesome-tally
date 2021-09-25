/* eslint import/no-webpack-loader-syntax: off */
import data from "!!raw-loader!./theme.module.css";

// targets "--space-half: 0.5rem;"
const tokens = data.match(/--[a-z, 0-9, -]+:\s.+;/gi);
const theme = {};

tokens.forEach((t) => {
  const _token = t.split(": ");
  const _name = _token[0];
  const _val = `var(${_name})`;

  let _key = _name.slice(2);

  if (_key.split("-").length > 1) {
    _key = _key.split("-").reduce((acc, cur, i) => {
      if (i === 0) return cur;

      return `${acc}${cur[0].toUpperCase()}${cur.slice(1)}`;
    }, "");
  }

  theme[_key] = _val;
});

const defaultTheme = {
  spaceEighth: theme.spaceEighth,
  spaceQuarter: theme.spaceQuarter,
  spaceHalf: theme.spaceHalf,
  spaceThreeQuarters: theme.spaceThreeQuarters,
  spaceOne: theme.spaceOne,
  spaceOneAndHalf: theme.spaceOneAndHalf,
  spaceTwo: theme.spaceTwo,
  spaceThree: theme.spaceThree,
  spaceFour: theme.spaceFour,
  fontSizeS: theme.fontSizeS,
  fontSizeM: theme.fontSizeM,
  fontSizeN: theme.fontSizeN,
  fontSizeL: theme.fontSizeL,
  fontSizeXl: theme.fontSizeXl,
  fontSize2xl: theme.fontSize2xl,
  fontSize3xl: theme.fontSize3xl,
  fontSize4xl: theme.fontSize4xl,
  lineHeightN: theme.lineHeightN,
  lineHeightS: theme.lineHeightS,
  radiusLight: theme.radiusLight,
  radiusRegular: theme.radiusRegular,
  radiusHeavy: theme.radiusHeavy,
  borderSizeLight: theme.borderSizeLight,
  borderSizeRegular: theme.borderSizeRegular,
  borderSizeHeavy: theme.borderSizeHeavy,

  colorThemeTemp: theme.colorThemeTemp,
  colorDarkTemp: theme.colorDarkTemp,
  colorLightTemp: theme.colorLightTemp,
};

export default defaultTheme;

export const MAP_SPACE = {
  '0': 0,
  '0.25': theme.spaceQuarter,
  '0.5': theme.spaceHalf,
  '0.75': theme.spaceThreeQuarters,
  '1': theme.spaceOne,
  '1.5': theme.spaceOneAndHalf,
  '2': theme.spaceTwo,
  '3': theme.spaceThree,
  '4': theme.spaceFour,
};
