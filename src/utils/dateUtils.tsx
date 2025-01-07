import i18n  from '../i18n/i18next';

export const formatDate = (date: Date): string => {
  const locale = i18n.language || "sv";

    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
    });
  };