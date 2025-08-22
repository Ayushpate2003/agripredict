
export async function exportPlanToExcel(planningData) {
  const XLSX = await import('xlsx');

  // Flatten activities for Excel
  const activities = planningData?.activities?.map(a => ({
    Title: a.title,
    Date: a.date,
    Status: a.status,
    Icon: a.icon
  })) || [];

  // Flatten weather forecast
  const weather = planningData?.weatherForecast?.map(w => ({
    Day: w.day,
    Icon: w.icon,
    Temperature: w.temp
  })) || [];

  // Flatten timeline
  const timeline = planningData?.timeline?.map(t => ({
    Title: t.title,
    Date: t.date,
    Description: t.description,
    Duration: t.duration,
    Priority: t.priority
  })) || [];

  // Create workbook
  const wb = XLSX.utils.book_new();
  if (activities.length) XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(activities), 'Activities');
  if (weather.length) XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(weather), 'Weather');
  if (timeline.length) XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(timeline), 'Timeline');

  XLSX.writeFile(wb, 'Farm-Plan.xlsx');
}
