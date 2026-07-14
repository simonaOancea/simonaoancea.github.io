// Shared date formatting. Everything renders through UTC — engagement dates
// parse as UTC midnight, so formatting in UTC avoids off-by-one-day shifts.
const short = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatDateRange(date: Date, endDate?: Date): string {
  return endDate ? short.formatRange(date, endDate) : short.format(date);
}
