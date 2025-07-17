const DueDate = ({ dueDate }) => {
    if (!dueDate) return null;

    const today = new Date();
    const dDate = new Date(dueDate);
    const daysLeft = Math.ceil((dDate - today) / (1000 * 60 * 60 * 24));
    let color = "inherit";
    let label = "";
    if (daysLeft < 0) {
        color = "#b90000";
        label = " (Overdue!)";
    } else if (daysLeft <= 2) {
        color = "#e67e22";
        label = " (Due soon!)";
    }
    return (
        <span style={{ color, fontWeight: daysLeft < 0 ? "bold" : undefined }}>
            Due: {dueDate}{label}
        </span>
    );
};

export default DueDate;
