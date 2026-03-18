// src/utils/helpers.js

/**
 * Format distance (e.g., meters to km)
 */
export const formatDistance = (distance) => {
  if (!distance && distance !== 0) return "N/A";

  if (distance < 1000) {
    return `${distance} m`;
  }

  return `${(distance / 1000).toFixed(1)} km`;
};

/**
 * Format time (e.g., minutes remaining)
 */
export const formatTimeRemaining = (minutes) => {
  if (!minutes && minutes !== 0) return "N/A";

  if (minutes <= 0) return "Expired";

  return `${minutes} mins left`;
};

/**
 * Capitalize first letter of a string
 */
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Simple Phone Number Formatter
 */
export const formatPhone = (phone) => {
  if (!phone) return "N/A";
  return phone;
};

/**
 * Get Bootstrap/Clay badge variant based on reservation status
 */
export const getStatusVariant = (status) => {
  switch (status?.toLowerCase()) {
    case "reserved":
    case "pending":
      return "warning";
    case "collected":
    case "success":
      return "success";
    case "expired":
    case "cancelled":
      return "secondary";
    default:
      return "primary";
  }
};

/**
 * Truncate long text with ellipses
 */
export const truncateText = (text, maxLength = 50) => {
  if (!text) return "";
  return text.length > maxLength
    ? text.substring(0, maxLength) + "..."
    : text;
};

/**
 * Generate initials from a name (e.g., "Atharv P" -> "AP")
 */
export const getInitials = (name) => {
  if (!name) return "";
  
  return name
    .split(" ")
    .filter(Boolean) // Extra spaces remove cheyyan
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};