export function formateDDMMYY(dateString: string) {
  // Create a new Date object from the provided date string
  const date = new Date(dateString);

  // Get the month, day, and year from the date object
  const month = date.getMonth() + 1; // Adding 1 because months are zero-based
  const day = date.getDate();
  const year = date.getFullYear() % 100; // Getting the last two digits of the year

  // Format the date components as mm/dd/yy
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
