import axios from 'axios';

const _envBase = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || '';

function normalizeBase(base) {
  if (!base) return 'http://localhost:3000';
  if (/^https?:\/\//i.test(base)) return base.replace(/\/$/, '');
  if (base.startsWith('/')) return `http://localhost:3000${base.replace(/\/$/, '')}`;
  return `https://${base.replace(/\/$/, '')}`;
}

const DEFAULT_BASE = normalizeBase(_envBase);

const apiClient = axios.create({
  baseURL: DEFAULT_BASE,
});

apiClient.interceptors.request.use((config) => {
    config.headers.AuthorizeToken = process.env.NEXT_PUBLIC_FRONTEND_AUTH_TOKEN || '';
    return config;
});

export default apiClient;