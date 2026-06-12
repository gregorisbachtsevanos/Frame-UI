# Frame UI Storybook Home Page

The Home component is the default landing page for the Frame UI Storybook. It provides a welcoming introduction to the component library with hero section, component categories, design system documentation, and quick navigation.

## Features

### 🎨 Hero Section
- Eye-catching gradient background with project branding
- Project description and version information
- Call-to-action buttons for quick access

### 📦 Component Categories
- 6 organized component categories with icons
- Component lists for each category
- Visual cards with hover effects

### 🎯 Design System Overview
- Complete color palette display
- Spacing scale visualization
- Typography samples
- Design token references

### 📚 Documentation Links
- Quick access to Getting Started guide
- Component API documentation
- Design tokens reference
- Accessibility guidelines
- Contributing guidelines
- Changelog

### 📋 Recent Updates
- Changelog entries with version information
- Feature highlights for each release
- Latest release badge

### 🌐 Responsive Design
- Mobile-first design approach
- Fully responsive on all screen sizes
- Touch-friendly interactive elements

## Usage

### React Component

```tsx
import { Home } from '@frame-ui/ui';

export function MyStorybook() {
  return (
    <Home
      projectName="Frame UI"
      projectDescription="A modern, accessible React component library"
      version="1.0.0"
      githubUrl="https://github.com/anomalyco/frame-ui"
      docsUrl="https://frame-ui.dev"
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `projectName` | `string` | "Frame UI" | Project name displayed in hero section |
| `projectDescription` | `string` | Long description | Project tagline/description |
| `version` | `string` | "1.0.0" | Version number to display |
| `githubUrl` | `string` | Frame UI GitHub | GitHub repository URL |
| `docsUrl` | `string` | frame-ui.dev | Documentation website URL |

### Storybook Stories

Three story variants are provided:

#### Default
The main home page with all default values.
```
Path: ?path=/story/home--default
```

#### CustomProject
Shows how the home page can be customized with different project information.
```
Path: ?path=/story/home--custom-project
```

#### Minimal
Demonstrates minimal configuration with mostly defaults.
```
Path: ?path=/story/home--minimal
```

## MDX Alternative

An MDX-based home page is also available at `apps/storybook/stories/Home.mdx`. This provides an alternative documentation-focused approach with:

- Embedded styling without React components
- Direct Markdown content
- Inline code examples
- Visual design token demonstrations

## Design System Styling

The Home component uses Vanilla Extract CSS for zero-runtime styling:

```typescript
// Home.css.ts
export const heroSection = style({
  background: `linear-gradient(135deg, ${vars.color.primary} 0%, #1e40af 100%)`,
  // ... responsive and theme-aware styling
});
```

All styles:
- Use design tokens from `@frame-ui/theme`
- Support dark mode automatically
- Are fully responsive
- Include hover states and transitions

## Integration with Storybook

### Configuration

The home page is configured in `.storybook/main.ts`:

```typescript
stories: [
  // Load the Home/Welcome page first as default
  "../stories/**/*.mdx",
  "../../../packages/ui/src/**/*.stories.@(ts|tsx|mdx)",
],
```

The MDX file in `apps/storybook/stories/` loads first, making it the default landing page.

### Preview Styling

The `.storybook/preview.ts` includes theme support:

```typescript
decorators: [
  (Story, context) => {
    const theme = context.globals.theme;
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle(darkTheme, theme === "dark");
    }
    return Story();
  },
],
```

## Documentation Pages

Additional documentation is provided in the `stories/` directory:

- **Home.mdx** - Main landing page (MDX version)
- **GettingStarted.mdx** - Installation and setup guide
- **DesignTokens.mdx** - Complete design system tokens documentation
- **Accessibility.mdx** - Accessibility guidelines and best practices

## Customization

### Colors

Customize the hero gradient by modifying `Home.css.ts`:

```typescript
export const heroSection = style({
  background: `linear-gradient(135deg, #your-color 0%, #another-color 100%)`,
  // ...
});
```

### Component Categories

Update the `COMPONENT_CATEGORIES` array in `Home.tsx`:

```typescript
const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    icon: "🎨",
    title: "Display",
    description: "Your description",
    components: ["Component1", "Component2"],
  },
  // Add more categories...
];
```

### Design Tokens

Modify the `COLORS`, `SPACING_VALUES`, and `CHANGELOG` arrays:

```typescript
const COLORS: ColorToken[] = [
  { name: "Your Color", value: "#000000" },
  // ...
];
```

## Dark Mode Support

The Home component automatically supports dark mode through the theme tokens:

```typescript
globalStyle("[class*='darkTheme']", {
  vars: {
    [vars.color.text]: "#f1f5f9",
    [vars.color.surface]: "#0f172a",
    // ... dark mode overrides
  } as any,
});
```

When the `.darkTheme` class is added to the document root, all colors automatically adjust.

## Responsive Breakpoints

The component uses these responsive breakpoints:

| Breakpoint | Screen Size | Adjustments |
|-----------|-----------|-------------|
| Mobile | < 480px | Single column layouts, reduced padding |
| Tablet | 480px - 768px | Two-column grids, adjusted spacing |
| Desktop | 768px - 1024px | Two to three column grids |
| Large | > 1024px | Full grid layouts, maximum width |

## Accessibility

The Home component includes:

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ High contrast color ratios (WCAG AAA)
- ✅ Text alternatives for visual content
- ✅ Focus indicators on interactive elements

## Performance

### Bundle Size

The Home component is minimal:
- Vanilla Extract CSS (zero-runtime)
- No external dependencies beyond React
- Tree-shakable exports
- ~15KB minified (uncompressed CSS)

### Optimization

- No inline JavaScript
- Static content except for interactive links
- CSS is extracted at build time
- No layout shifts or reflows

## Browser Support

Tested and supported on:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Examples

### Basic Usage

```tsx
<Home />
```

### With Custom Project Info

```tsx
<Home
  projectName="Acme Design System"
  projectDescription="Enterprise component library"
  version="2.0.0"
  githubUrl="https://github.com/acme/design-system"
  docsUrl="https://design.acme.com"
/>
```

### In Storybook

```tsx
// Home.stories.tsx
import { Home } from './Home';

export const Default = {
  args: {
    projectName: "Frame UI",
    version: "1.0.0",
  },
};
```

## Troubleshooting

### Home page doesn't appear as default

Ensure `stories/Home.mdx` is listed first in `.storybook/main.ts`:

```typescript
stories: [
  "../stories/**/*.mdx",  // ← This must come first
  "../../../packages/ui/src/**/*.stories.@(ts|tsx|mdx)",
],
```

### Styles not applying

Ensure the Vanilla Extract plugin is configured in `main.ts`:

```typescript
viteFinal: async (config) => {
  config.plugins = config.plugins || [];
  config.plugins.push(vanillaExtractPlugin());
  // ...
}
```

### Dark mode not working

Verify the preview configuration includes the dark theme decorator:

```typescript
// .storybook/preview.ts
decorators: [
  (Story, context) => {
    const theme = context.globals.theme;
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle(darkTheme, theme === "dark");
    }
    return Story();
  },
],
```

## Contributing

To improve the Home page:

1. Edit `packages/ui/src/components/Home/Home.tsx` for React component changes
2. Edit `packages/ui/src/components/Home/Home.css.ts` for styling changes
3. Edit `apps/storybook/stories/Home.mdx` for MDX documentation changes
4. Update related documentation files in `apps/storybook/stories/`
5. Run `npm run dev` to test locally
6. Create a pull request with your changes

## Resources

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Vanilla Extract CSS](https://vanilla-extract.style/)
- [Design System Best Practices](https://www.designsystems.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Made with ❤️ for the Frame UI community**
