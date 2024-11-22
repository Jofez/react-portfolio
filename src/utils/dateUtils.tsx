export const formatDate = (date: Date): string => {
    return date.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "short",
    });
  };