/**
 * Shared emoji/unicode map for `:name:` icon shortcodes.
 * Aliases keep docs/skills names working (gear/trash/x) and add
 * domain-friendly names (tree, house, person, map, …).
 */

export const ICON_MAP: Record<string, string> = {
  // Social media
  twitter: '𝕏',
  github: '⊙',
  linkedin: 'in',
  facebook: 'f',
  instagram: '◉',
  youtube: '▶',

  // Common UI icons
  home: '🏠',
  user: '👤',
  settings: '⚙️',
  search: '🔍',
  star: '⭐',
  heart: '❤️',
  mail: '✉️',
  phone: '📞',
  calendar: '📅',
  clock: '🕐',
  location: '📍',
  link: '🔗',
  download: '⬇️',
  upload: '⬆️',
  edit: '✏️',
  delete: '🗑️',
  plus: '➕',
  minus: '➖',
  check: '✓',
  close: '✕',
  menu: '☰',
  more: '⋯',
  info: 'ℹ️',
  warning: '⚠️',
  error: '❌',
  success: '✅',

  // Arrows
  'arrow-up': '↑',
  'arrow-down': '↓',
  'arrow-left': '←',
  'arrow-right': '→',

  // Business/Finance
  chart: '📊',
  dollar: '$',
  euro: '€',
  pound: '£',

  // Tech
  code: '</>',
  database: '🗄️',
  cloud: '☁️',
  wifi: '📶',

  // Communication
  chat: '💬',
  video: '🎥',
  microphone: '🎤',
  bell: '🔔',

  // Files
  file: '📄',
  folder: '📁',
  image: '🖼️',
  document: '📃',
  pdf: '📑',

  // Brand placeholders
  logo: '◈',
  brand: '◆',

  // Activities
  rocket: '🚀',
  bulb: '💡',
  shield: '🛡️',
  lock: '🔒',
  unlock: '🔓',
  key: '🔑',
  gift: '🎁',
  trophy: '🏆',
  flag: '🚩',
  bookmark: '🔖',
  tag: '🏷️',
  cart: '🛒',
  'credit-card': '💳',

  // Domain / climate-adaptation friendly
  tree: '🌳',
  plant: '🌱',
  leaf: '🍃',
  sun: '☀️',
  thermometer: '🌡️',
  drop: '💧',
  rain: '🌧️',
  wind: '💨',
  map: '🗺️',
  building: '🏢',
  shop: '🏪',
  tools: '🛠️',
  clipboard: '📋',
  megaphone: '📢',
  handshake: '🤝',
  pin: '📌',

  // Aliases (skills docs + natural synonyms)
  house: '🏠',
  person: '👤',
  people: '👥',
  users: '👥',
  gear: '⚙️',
  cog: '⚙️',
  trash: '🗑️',
  x: '✕',
  cross: '✕',
  'pin-drop': '📍',
  marker: '📍',
  thermo: '🌡️',
  heat: '🌡️',
  water: '💧',

  // Default
  default: '●',
};

export function resolveIcon(name: string | undefined | null): string {
  const key = (name || 'default').toLowerCase();
  return ICON_MAP[key] || ICON_MAP.default;
}
