# Frame UI Monorepo

This repo is a pnpm workspace with:

- `packages/ui` (React component library)
- `packages/theme` (theme package)
- `packages/tokens` (design tokens)
- `apps/storybook` (storybook app)

## 1) Prerequisites

- Node.js `>=22 <24`
- pnpm `10`

Check your versions:

```bash
node -v
pnpm -v
```

If your Node is `24.x`, switch to Node `22.x` to avoid engine warnings.

## 2) First-time setup (run from repo root)

```bash
pnpm install
```

## 3) Start development (run from repo root)

```bash
pnpm dev
```

This builds required packages and starts dev tasks via Turbo.

## 4) Useful root commands (run from repo root)

```bash
pnpm build
pnpm lint
pnpm test
```

## 5) Run a specific workspace

From repo root:

```bash
pnpm --filter @frame-ui/storybook dev
pnpm --filter @frame-ui/ui build
pnpm --filter @frame-ui/theme build
pnpm --filter @frame-ui/tokens build
```

## 6) Commands by folder

Each folder with a `package.json` has its own README with local commands:

- `apps/storybook/README.md`
- `packages/ui/README.md`
- `packages/theme/README.md`
- `packages/tokens/README.md`
