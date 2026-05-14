# UI Library

A modern, reusable React + TypeScript component library using Vite (library mode), Storybook, and vanilla-extract.

## Stack

- React + TypeScript
- Vite library build (ESM + CJS + types)
- Storybook
- vanilla-extract tokens + themes
- clsx for class composition

## Design System

The library ships with semantic design tokens and two themes:

- `lightTheme`
- `darkTheme`

Tokens include:

- semantic colors (`background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `danger`) with `default`, `hover`, `active`, `disabled`
- spacing (4px base scale)
- radii (6px-12px)
- shadow scale
- typography scale

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Example Usage

```tsx
import { ThemeProvider, Button, Card, CardBody, CardHeader, Input, Tabs } from "@your-github-org/ui-lib";

export function App() {
  return (
    <ThemeProvider mode="system">
      <Card>
        <CardHeader>Welcome</CardHeader>
        <CardBody>
          <Input placeholder="Email" />
          <Button style={{ marginTop: 12 }}>Continue</Button>
        </CardBody>
      </Card>

      <Tabs
        items={[
          { id: "a", label: "Overview", content: "Overview content" },
          { id: "b", label: "Activity", content: "Activity content" }
        ]}
      />
    </ThemeProvider>
  );
}
```

## Scripts

- `npm run dev` - run Storybook locally
- `npm run build` - build library
- `npm run test` - run tests
- `npm run lint` - run ESLint
- `npm run format` - run Prettier
