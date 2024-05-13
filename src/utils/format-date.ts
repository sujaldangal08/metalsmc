import dayjs from "dayjs";

export function formatDate(
  date?: Date,
  format: string = "DD MMM, YYYY"
): string {
  if (!date) return "";
  return dayjs(date).format(format);
}

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

export function formateDDmmYY(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}
