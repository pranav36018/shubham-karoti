// Central API base configuration
// In production or when proxied by Vite, relative path '' is used.
// If backend is deployed to a separate domain, set VITE_API_URL in .env.
export const API_BASE = import.meta.env.VITE_API_URL || '';
