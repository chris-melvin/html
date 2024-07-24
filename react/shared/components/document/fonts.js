import { Font } from "@react-pdf/renderer";

const registerPoppins = () => {
  Font.register({
    family: "Poppins",
    fonts: [
      {
        fontWeight: 400,
        src: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf",
      },
      {
        fontWeight: "normal",
        src: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf",
      },
      {
        fontWeight: "semibold",
        src: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf",
      },
      {
        fontWeight: "bold",
        src: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf",
      },
      {
        fontWeight: 400,
        fontStyle: "italic",
        src: "https://fonts.gstatic.com/s/poppins/v21/pxiGyp8kv8JHgFVrJJLufntF.ttf",
      },
    ],
  });
};

const registerSourceCodePro = () => {
  Font.register({
    family: "Source Code Pro",
    fonts: [
      {
        fontWeight: "normal",
        src: "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQhM5hTXUcdJg.ttf",
      },
      {
        fontWeight: "semibold",
        src: "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DBKXhM5hTXUcdJg.ttf",
      },
      {
        fontWeight: "bold",
        src: "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DCuXhM5hTXUcdJg.ttf",
      },
    ],
  });
};

const registerSourceSans = () => {
  Font.register({
    family: "Source Sans",
    fonts: [
      {
        fontWeight: "light",
        src: "https://cdn.jsdelivr.net/fontsource/fonts/source-sans-pro@latest/latin-300-normal.ttf",
      },
      {
        fontWeight: 400,
        src: "https://cdn.jsdelivr.net/fontsource/fonts/source-sans-pro@latest/latin-400-normal.ttf",
      },
      {
        fontWeight: "semibold",
        src: "https://cdn.jsdelivr.net/fontsource/fonts/source-sans-pro@latest/latin-600-normal.ttf",
      },
      {
        fontWeight: "bold",
        src: "https://cdn.jsdelivr.net/fontsource/fonts/source-sans-pro@latest/latin-700-normal.ttf",
      },
      {
        fontWeight: 400,
        fontStyle: "italic",
        src: "https://cdn.jsdelivr.net/fontsource/fonts/source-sans-pro@latest/latin-400-italic.ttf",
      },
    ],
  });
};

const registerMinionPro = () => {
  Font.register({
    family: "Minion Pro",
    fonts: [
      {
        fontWeight: "regular",
        src: "https://fonts.cdnfonts.com/s/13260/MinionPro-Regular.woff",
      },
      {
        fontStyle: "italic",
        src: "https://fonts.cdnfonts.com/s/13260/MinionPro-It.woff",
      },
      {
        fontWeight: "bold",
        src: "https://fonts.cdnfonts.com/s/13260/MinionPro-BoldCn.woff",
      },
    ],
  });
};

const registerArial = () => {
  Font.register({
    family: "Arial",
    fonts: [
      {
        fontWeight: 400,
        src: "../../../fonts/arial.ttf",
      },
      {
        fontWeight: 700,
        src: "../../../fonts/ARIALBD.TTF",
      },
      {
        fontStyle: "italic",
        src: "../../../fonts/ARIALI.TTF",
      },
    ],
  });
};

const registerArialNarrow = () => {
  Font.register({
    family: "Arial Narrow",
    fonts: [
      {
        src: "../../../fonts/ARIALN.TTF",
      },
      // {
      //   src: "../../../fonts/ArialNarrowM.ttf",
      // },
      {
        fontWeight: 400,
        fontStyle: "italic",
        src: "../../../fonts/ARIALNI.TTF",
      },
    ],
  });
};

const registerTimesNewRoman = () => {
  Font.register({
    family: "TimesNewRoman",
    fonts: [
      {
        fontWeight: 400,
        src: "https://fonts.cdnfonts.com/css/times-new-roman",
      },
      {
        fontStyle: "italic",
        src: "../../../fonts/FontsFree-Net-times-new-roman-italic.ttf",
      },
      {
        fontWeight: "bold",
        fontStyle: "italic",
        src: "../../../fonts/times-new-roman-bold-italic.ttf",
      },
    ],
  });
};

const registerCustomWordWrapping = () => {
  const hyphenationCallback = (word) => [word];

  Font.registerHyphenationCallback(hyphenationCallback);
};

export {
  registerPoppins,
  registerSourceCodePro,
  registerSourceSans,
  registerMinionPro,
  registerCustomWordWrapping,
  registerArial,
  registerArialNarrow,
  registerTimesNewRoman,
};
