import { forwardRef, HTMLAttributes, ReactNode, useState } from "react";
import * as styles from "./Tabs.css.js";

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  defaultValue?: string;
  variant?: "line" | "enclosed";
}

export const Tabs = forwardRef<
  HTMLDivElement,
  TabsProps
>(
  (
    {
      items,
      defaultValue,
      variant = "line",
      className,
      ...props
    },
    ref
  ) => {
    const initial = defaultValue ?? items[0]?.id ?? "";
    const [active, setActive] = useState(initial);
    const current = items.find((item) => item.id === active) ?? items[0];

    return (
      <div ref={ref} className={`${styles.root} ${styles.variant[variant]}`} {...props}>
        <div className={styles.tablist} role="tablist" aria-label="Tabs">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={styles.tab}
              aria-selected={current?.id === item.id}
              aria-controls={`panel-${item.id}`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div
          id={`panel-${current?.id}`}
          className={styles.panel}
          role="tabpanel"
        >
          {current?.content}
        </div>
      </div>
    );
  }
);

Tabs.displayName = "Tabs";
