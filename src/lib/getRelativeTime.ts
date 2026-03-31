export default function getRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths =
    (now.getFullYear() - date.getFullYear()) * 12 +
    (now.getMonth() - date.getMonth());
  const diffYears = now.getFullYear() - date.getFullYear();

  if (diffDays < 30) return `há ${diffDays} dia${diffDays !== 1 ? "s" : ""}`;
  if (diffMonths < 12)
    return `há ${diffMonths} mes${diffMonths !== 1 ? "es" : ""}`;
  return `há ${diffYears} ano${diffYears !== 1 ? "s" : ""}`;
}
