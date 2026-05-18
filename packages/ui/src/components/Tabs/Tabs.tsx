import { HTMLAttributes, ReactNode, useState } from "react";
import * as styles from "./Tabs.css.js";

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  defaultValue?: string;
}

export function Tabs({ items, defaultValue, ...props }: TabsProps) {
  const initial = defaultValue ?? items[0]?.id ?? "";
  const [active, setActive] = useState(initial);
  const current = items.find((item) => item.id === active) ?? items[0];

  return (
    <div className={styles.root} {...props}>
      <div role="tablist" aria-label="Tabs">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={current?.id === item.id}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{current?.content}</div>
    </div>
  );
}
