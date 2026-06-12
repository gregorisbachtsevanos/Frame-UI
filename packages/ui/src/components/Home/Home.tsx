import React from "react";
import * as styles from "./Home.css";

interface ComponentCategory {
  icon: string;
  title: string;
  description: string;
  components: string[];
}

interface ColorToken {
  name: string;
  value: string;
}

interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    icon: "🎨",
    title: "Display",
    description: "Components for visual hierarchy and typography",
    components: [
      "Typography",
      "Badge",
      "Avatar",
      "Kbd",
      "Skeleton",
      "Spinner",
    ],
  },
  {
    icon: "🔘",
    title: "Forms & Inputs",
    description: "Form controls and input components",
    components: [
      "Input",
      "Button",
      "Checkbox",
      "Radio",
      "Select",
      "Textarea",
      "Toggle",
      "Switch",
    ],
  },
  {
    icon: "📊",
    title: "Data Display",
    description: "Components for displaying data and content",
    components: ["Table", "Card", "DataTable", "Calendar", "Chart"],
  },
  {
    icon: "🗂️",
    title: "Navigation",
    description: "Components for user navigation and menus",
    components: [
      "Breadcrumb",
      "Pagination",
      "Sidebar",
      "NavigationMenu",
      "Tabs",
      "DropdownMenu",
    ],
  },
  {
    icon: "💬",
    title: "Feedback & Modals",
    description: "Components for user feedback and interactions",
    components: [
      "Alert",
      "Dialog",
      "AlertDialog",
      "Toast",
      "Popover",
      "Tooltip",
    ],
  },
  {
    icon: "🎭",
    title: "Layout & Containers",
    description: "Components for organizing content",
    components: ["Drawer", "Sheet", "Accordion", "Collapsible", "AspectRatio"],
  },
];

const COLORS: ColorToken[] = [
  { name: "Primary", value: "#2563eb" },
  { name: "Text", value: "#0f172a" },
  { name: "Text Muted", value: "#475569" },
  { name: "Surface", value: "#ffffff" },
  { name: "Surface Secondary", value: "#f8fafc" },
  { name: "Border", value: "#e2e8f0" },
  { name: "Border Strong", value: "#cbd5e1" },
  { name: "Focus Ring", value: "#93c5fd" },
];

const SPACING_VALUES = [
  { name: "xs", value: "4px" },
  { name: "sm", value: "8px" },
  { name: "md", value: "12px" },
  { name: "lg", value: "16px" },
  { name: "xl", value: "24px" },
];

const CHANGELOG: ChangelogEntry[] = [
  {
    version: "1.0.0",
    date: "June 2024",
    changes: [
      "Initial release of Frame UI design system",
      "60+ component library with full TypeScript support",
      "Vanilla Extract CSS for zero-runtime styling",
      "Dark mode support with system theme integration",
    ],
  },
  {
    version: "0.9.0",
    date: "May 2024",
    changes: [
      "Added DataTable component with advanced sorting",
      "Improved accessibility with ARIA labels",
      "Enhanced mobile responsive design",
    ],
  },
  {
    version: "0.8.0",
    date: "April 2024",
    changes: [
      "Released Carousel component",
      "Added Chart component for data visualization",
      "Implemented theming system",
    ],
  },
];

const DOCUMENTATION_LINKS = [
  {
    label: "Getting Started",
    href: "?path=/docs/getting-started",
    icon: "🚀",
  },
  { label: "Component API", href: "?path=/docs/components", icon: "📚" },
  { label: "Design Tokens", href: "?path=/docs/design-tokens", icon: "🎨" },
  {
    label: "Accessibility",
    href: "?path=/docs/accessibility",
    icon: "♿",
  },
  {
    label: "Contributing",
    href: "?path=/docs/contributing",
    icon: "🤝",
  },
  { label: "Changelog", href: "?path=/docs/changelog", icon: "📝" },
];

export interface HomeProps {
  /**
   * Project name to display in the hero section
   */
  projectName?: string;
  /**
   * Project description/tagline
   */
  projectDescription?: string;
  /**
   * Version number to display
   */
  version?: string;
  /**
   * GitHub repository URL
   */
  githubUrl?: string;
  /**
   * Documentation URL
   */
  docsUrl?: string;
}

/**
 * Frame UI Design System Home Page
 *
 * A comprehensive landing page for the Frame UI component library.
 * Features a hero section, component categories, design tokens, and quick links.
 */
export const Home: React.FC<HomeProps> = ({
  projectName = "Frame UI",
  projectDescription = "A modern, accessible React component library built with TypeScript and Vanilla Extract CSS",
  version = "1.0.0",
  githubUrl = "https://github.com/anomalyco/frame-ui",
  docsUrl = "https://frame-ui.dev",
}) => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{projectName}</h1>
        <p className={styles.heroSubtitle}>{projectDescription}</p>
        <div className={styles.heroCTA}>
          <button className={`${styles.button} ${styles.buttonPrimary}`}>
            📖 View Components
          </button>
          <button className={`${styles.button} ${styles.buttonSecondary}`}>
            ⭐ GitHub
          </button>
        </div>
        <div style={{ marginTop: "24px", opacity: 0.9, fontSize: "14px" }}>
          v{version}
        </div>
      </section>

      {/* Quick Start */}
      <section>
        <h2 className={styles.sectionHeader}>🚀 Quick Start</h2>
        <div className={`${styles.grid} ${styles.gridTwoColumns}`}>
          <div className={styles.card}>
            <h3 className={styles.cardHeader}>Installation</h3>
            <p className={styles.cardDescription}>
              Install Frame UI using your preferred package manager
            </p>
            <code
              style={{
                display: "block",
                padding: "12px",
                background: "#f5f5f5",
                borderRadius: "8px",
                fontSize: "13px",
                overflow: "auto",
              }}
            >
              npm install @frame-ui/ui
            </code>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardHeader}>Usage</h3>
            <p className={styles.cardDescription}>
              Import and use components in your React application
            </p>
            <code
              style={{
                display: "block",
                padding: "12px",
                background: "#f5f5f5",
                borderRadius: "8px",
                fontSize: "13px",
                overflow: "auto",
              }}
            >
              {`import { Button } from '@frame-ui/ui'`}
            </code>
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section>
        <h2 className={styles.sectionHeader}>📦 Component Categories</h2>
        <div className={`${styles.grid} ${styles.gridThreeColumns}`}>
          {COMPONENT_CATEGORIES.map((category) => (
            <div key={category.title} className={`${styles.card} ${styles.categoryCard}`}>
              <div className={styles.categoryIcon}>{category.icon}</div>
              <div>
                <h3 className={styles.cardHeader}>{category.title}</h3>
                <p className={styles.cardDescription}>
                  {category.description}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "#666" }}>
                  Components: {category.components.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design System Overview */}
      <section>
        <h2 className={styles.sectionHeader}>🎨 Design System</h2>

        <div className={`${styles.grid} ${styles.gridTwoColumns}`}>
          {/* Colors */}
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>
              Colors
            </h3>
            <div className={styles.tokenGroup}>
              {COLORS.map((color) => (
                <div key={color.name} className={styles.colorSwatch}>
                  <div
                    className={styles.colorBox}
                    style={{ background: color.value }}
                  />
                  <div className={styles.colorInfo}>
                    <div className={styles.colorName}>{color.name}</div>
                    <div className={styles.colorValue}>{color.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacing & Typography */}
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>
              Spacing & Sizes
            </h3>
            <div className={styles.typographySamples}>
              {SPACING_VALUES.map((space) => (
                <div key={space.name}>
                  <div className={styles.typographyLabel}>{space.name}</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: space.value,
                        height: space.value,
                        background: "#2563eb",
                        borderRadius: "4px",
                      }}
                    />
                    <span style={{ fontSize: "14px", color: "#666" }}>
                      {space.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Links */}
      <section>
        <h2 className={styles.sectionHeader}>📚 Documentation</h2>
        <div className={styles.quickLinksContainer}>
          {DOCUMENTATION_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.quickLinkItem}
            >
              <span style={{ fontSize: "18px" }}>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Recent Updates */}
      <section>
        <h2 className={styles.sectionHeader}>📋 Recent Updates</h2>
        <div className={`${styles.grid}`} style={{ gridTemplateColumns: "1fr" }}>
          {CHANGELOG.map((entry) => (
            <div key={entry.version} className={styles.changelogItem}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div className={styles.changelogVersion}>v{entry.version}</div>
                  <div className={styles.changelogDate}>{entry.date}</div>
                </div>
                <span className={styles.badge}>Latest</span>
              </div>
              <ul className={styles.changelogList}>
                {entry.changes.map((change, idx) => (
                  <li key={idx} className={styles.changelogListItem}>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <section style={{ marginTop: "60px", paddingTop: "24px", borderTop: `1px solid #e2e8f0` }}>
        <div style={{ textAlign: "center", color: "#666", fontSize: "14px" }}>
          <p>
            {projectName} • v{version} • Built with ❤️ using React & Vanilla Extract
          </p>
          <p style={{ marginTop: "12px", fontSize: "12px", color: "#999" }}>
            Made with care for developers exploring the component library
          </p>
        </div>
      </section>
    </div>
  );
};

Home.displayName = "Home";
