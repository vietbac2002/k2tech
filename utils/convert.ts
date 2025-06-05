const convertDate = (date: string) => {
  //  2025-05-31T12:20:41.770Z
  // convert date like above to "mm/dd/yyyy"
  const dateParts = date.split("T")[0].split("-");
  return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
};

export { convertDate };
