import { themeQuartz, iconSetQuartzLight } from "ag-grid-community";

// to use myTheme in an application, pass it to the theme grid option
const agGridTheme = themeQuartz.withPart(iconSetQuartzLight).withParams({
  accentColor: "#055393",
  backgroundColor: "#ffffff",
  browserColorScheme: "light",
  columnBorder: false,
  fontFamily: "Arial",
  foregroundColor: "rgb(46, 55, 66)",
  headerBackgroundColor: "#F9FAFB",
  headerFontSize: 14,
  headerFontWeight: 600,
  headerTextColor: "#919191",
  oddRowBackgroundColor: "#F9FAFB",
  rowBorder: false,
  sidePanelBorder: false,
  spacing: 8,
  wrapperBorder: false,
  wrapperBorderRadius: 0,
});
export { agGridTheme };
