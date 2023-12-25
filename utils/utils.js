export function getDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
export function blogDate(date) {
  // console.log("date:- ", date)
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
}
