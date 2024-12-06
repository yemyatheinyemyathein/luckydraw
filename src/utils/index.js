export const allowedImageTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/svg+xml",
  "image/bmp;",
];

export const tableStyles = (isMobile = false) => ({
  table: {
    style: {
      backgroundColor: "#23262B",
      borderRadius: "10px",
      overflow: "hidden",
      border: "1px solid #374151",
    },
  },
  headRow: {
    style: {
      borderBottomWidth: "1px",
      borderBottomColor: "#374151",
      borderBottomStyle: "solid",
      fontSize: isMobile ? "14px" : "16px",
    },
  },
  rows: {
    style: {
      minHeight: isMobile ? "48px" : "72px",
      backgroundColor: "#171819",
      fontSize: isMobile ? "12px" : "16px",
    },
    stripedStyle: {
      color: "white",
      backgroundColor: "#23262B",
    },
  },
  headCells: {
    style: {
      paddingLeft: isMobile ? "8px" : "16px",
      paddingRight: isMobile ? "8px" : "16px",
      backgroundColor: "#23262B",
      color: "#2cff0e",
    },
  },
  cells: {
    style: {
      paddingLeft: isMobile ? "8px" : "16px",
      paddingRight: isMobile ? "8px" : "16px",
      color: "white",
    },
  },
  noData: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#23262B",
      border: "1px solid gray",
      color: "white",
      borderRadius: "10px",
      padding: "50px 0",
    },
  },
  pagination: {
    style: {
      color: "white",
      fontSize: "13px",
      minHeight: "56px",
      backgroundColor: "#141517",
    },
    pageButtonsStyle: {
      color: "white",
      fill: "white",
      backgroundColor: "transparent",
      "&:disabled": {
        cursor: "unset",
        color: "white",
        fill: "gray",
      },
      "&:hover:not(:disabled)": {
        backgroundColor: "white",
      },
      "&:focus": {
        outline: "none",
      },
    },
  },
});

export const convertLanguageFull = (shortForm) => {
  switch (shortForm) {
    case "en":
      return "English";

    case "cn":
      return "Chinese";

    case "ms":
      return "Malay";

    default:
      return "English";
  }
};

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
