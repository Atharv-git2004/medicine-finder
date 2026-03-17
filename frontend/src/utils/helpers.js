// Format distance (e.g., meters to km)
export const formatDistance = (distance) => {
  if (!distance) return "N/A";

  if (distance < 1000) {
    return `${distance} m`;
  }

  return `${(distance / 1000).toFixed(1)} km`;
};

// Format time (e.g., minutes remaining)
export const formatTimeRemaining = (minutes) => {
  if (!minutes && minutes !== 0) return "N/A";

  if (minutes <= 0) return "Expired";

  return `${minutes} mins left`;
};

// Capitalize first letter
export const capitalize = (text) => {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Format phone number (simple)
export const formatPhone = (phone) => {
  if (!phone) return "N/A";

  return phone;
};

// Get badge variant based on status
export const getStatusVariant = (status) => {
  switch (status) {
    case "reserved":
      return "warning";
    case "collected":
      return "success";
    case "expired":
      return "secondary";
    default:
      return "primary";
  }
};

// Truncate long text
export const truncateText = (text, maxLength = 50) => {
  if (!text) return "";

  return text.length > maxLength
    ? text.substring(0, maxLength) + "..."
    : text;
};

// Generate initials from name
export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  return words.map((word) => word[0]).join("").toUpperCase();
};