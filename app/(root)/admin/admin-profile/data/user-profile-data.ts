export const generateLast12MonthsData = async () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // Note: getMonth() returns a zero-based index

  const monthsData: any = [];

  for (let i = 0; i < 12; i++) {
    const monthIndex = (currentMonth - i + 12) % 12;
    const monthName = new Date(currentYear, monthIndex).toLocaleString(
      "default",
      { month: "long" }
    );

    const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();

    const year = currentYear - (currentMonth < i ? 1 : 0);

    monthsData.push({
      month: { idx: String(monthIndex + 1).padStart(2, "0"), name: monthName },
      day: ["01", String(daysInMonth).padStart(2, "0")],
      year: year,
      orders: [],
    });
  }

  return monthsData.reverse();
};

export const calendarMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
