// Theme registry — the single source of truth shared by the no-flash script
// (Layout.astro) and the ThemePicker. Each id must have a matching
// [data-theme='<id>'] block in src/styles/tokens.css.
// `bg` doubles as the <meta name="theme-color"> value.

export interface Theme {
  id: string;
  label: string;
  scheme: 'dark' | 'light';
  bg: string;
  accent: string;
}

export const themes: Theme[] = [
  { id: 'bucharest', label: 'Bucharest', scheme: 'dark', bg: '#101319', accent: '#E5A54B' },
  { id: 'berlin', label: 'Berlin', scheme: 'dark', bg: '#0E0F11', accent: '#E8C842' },
  { id: 'munich', label: 'Munich', scheme: 'dark', bg: '#0D1420', accent: '#7FB4E8' },
  { id: 'antwerp', label: 'Antwerp', scheme: 'light', bg: '#F8F6F2', accent: '#14707E' },
  { id: 'hannover', label: 'Hannover', scheme: 'light', bg: '#F5F8F5', accent: '#1F7A4E' },
  { id: 'cluj', label: 'Cluj', scheme: 'light', bg: '#F7F6FB', accent: '#5B54C8' },
];

export const DEFAULT_THEME = themes[0];
