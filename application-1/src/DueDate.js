const DueDate = ({ dueDate }) => {
  if (!dueDate) return null;

  const today = new Date();
  const dDate = new Date(dueDate);

  // Normalize to midnight for date-only comparison
  const cleanToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const cleanDue = new Date(dDate.getFullYear(), dDate.getMonth(), dDate.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.round((cleanDue - cleanToday) / msPerDay);

  // 🕒 Time part
  const timeString = dDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  // 📅 Date label
  let dateLabel = "";
  if (diffInDays === 0) {
    dateLabel = "Today";
  } else if (diffInDays === 1) {
    dateLabel = "Tomorrow";
  } else if (diffInDays === -1) {
    dateLabel = "Yesterday";
  } else {
    const isSameYear = today.getFullYear() === dDate.getFullYear();
    dateLabel = dDate.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      ...(isSameYear ? {} : { year: "numeric" })
    });
  }

  // 🎨 Color logic
  let color = "inherit";
  let label = "";
  if (diffInDays < 0) {
    color = "#b90000";
    label = " (Overdue!)";
  } else if (diffInDays <= 2) {
    color = "#e67e22";
    label = " (Due soon!)";
  }

  return (
    <span id="date-time" style={{ color, fontWeight: diffInDays < 0 ? "bold" : undefined }}>
      {dateLabel}, {timeString}{label}
    </span>
  );
};

export default DueDate;
