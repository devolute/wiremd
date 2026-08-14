::: layout {.sidebar-main}

![[_sidebar.md]]

::: main

# Icons

Use `:name:` inline anywhere — in headings, buttons, nav bars, or plain text.

## Basic Usage

::: demo
:home: Home  :user: Profile  :settings: Settings
:::

::: demo
[:search: Search]*  [:edit: Edit]  [:delete: Delete]{variant:danger}
:::

::: demo
[[ :logo: MyApp | :home: Home | :bell: Alerts | :user: Account ]]
:::

## Available Icons

### UI

| Name | Renders as |
|------|------------|
| `:home:` / `:house:` | 🏠 |
| `:user:` / `:person:` | 👤 |
| `:settings:` / `:gear:` | ⚙️ |
| `:search:` | 🔍 |
| `:star:` | ⭐ |
| `:heart:` | ❤️ |
| `:mail:` | ✉️ |
| `:phone:` | 📞 |
| `:calendar:` | 📅 |
| `:clock:` | 🕐 |
| `:location:` | 📍 |
| `:link:` | 🔗 |
| `:download:` | ⬇️ |
| `:upload:` | ⬆️ |
| `:edit:` | ✏️ |
| `:delete:` / `:trash:` | 🗑️ |
| `:plus:` | ➕ |
| `:minus:` | ➖ |
| `:check:` | ✓ |
| `:close:` / `:x:` | ✕ |
| `:menu:` | ☰ |
| `:more:` | ⋯ |
| `:info:` | ℹ️ |
| `:warning:` | ⚠️ |
| `:error:` | ❌ |
| `:success:` | ✅ |

### Arrows

| Name | Renders as |
|------|------------|
| `:arrow-up:` | ↑ |
| `:arrow-down:` | ↓ |
| `:arrow-left:` | ← |
| `:arrow-right:` | → |

### Communication

| Name | Renders as |
|------|------------|
| `:chat:` | 💬 |
| `:video:` | 🎥 |
| `:microphone:` | 🎤 |
| `:bell:` | 🔔 |

### Files

| Name | Renders as |
|------|------------|
| `:file:` | 📄 |
| `:folder:` | 📁 |
| `:image:` | 🖼️ |
| `:document:` | 📃 |
| `:pdf:` | 📑 |

### Business & Finance

| Name | Renders as |
|------|------------|
| `:chart:` | 📊 |
| `:dollar:` | $ |
| `:euro:` | € |
| `:pound:` | £ |
| `:cart:` | 🛒 |
| `:credit-card:` | 💳 |
| `:tag:` | 🏷️ |

### Tech

| Name | Renders as |
|------|------------|
| `:code:` | </> |
| `:database:` | 🗄️ |
| `:cloud:` | ☁️ |
| `:wifi:` | 📶 |

### Domain / climate

| Name | Renders as |
|------|------------|
| `:tree:` | 🌳 |
| `:plant:` | 🌱 |
| `:sun:` | ☀️ |
| `:thermometer:` / `:heat:` | 🌡️ |
| `:drop:` / `:water:` | 💧 |
| `:rain:` | 🌧️ |
| `:wind:` | 💨 |
| `:map:` | 🗺️ |
| `:building:` | 🏢 |
| `:shop:` | 🏪 |
| `:tools:` | 🛠️ |
| `:megaphone:` | 📢 |
| `:handshake:` | 🤝 |

### Activities

| Name | Renders as |
|------|------------|
| `:rocket:` | 🚀 |
| `:bulb:` | 💡 |
| `:shield:` | 🛡️ |
| `:lock:` | 🔒 |
| `:unlock:` | 🔓 |
| `:key:` | 🔑 |
| `:gift:` | 🎁 |
| `:trophy:` | 🏆 |
| `:flag:` | 🚩 |
| `:bookmark:` | 🔖 |

### Brand / Logo Placeholders

| Name | Renders as |
|------|------------|
| `:logo:` | ◈ |
| `:brand:` | ◆ |

### Social Media

| Name | Renders as |
|------|------------|
| `:github:` | ⊙ |
| `:twitter:` | 𝕏 |
| `:linkedin:` | in |
| `:facebook:` | f |
| `:instagram:` | ◉ |
| `:youtube:` | ▶ |

## Syntax

```
:name:              inline icon
[:name: Label]*     icon in a button
:name: Label        icon before text
[[ :logo: Brand | ... ]]  icon in navbar brand
```

Unknown icon names fall back to `●`.

:::

:::
