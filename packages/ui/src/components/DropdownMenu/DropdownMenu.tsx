import { forwardRef, HTMLAttributes, ReactNode, useState } from "react";
import * as styles from "./DropdownMenu.css.js";

export interface DropdownItem {
  id: string;
  label: ReactNode;
  onSelect?: () => void;
}

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode;
  items: DropdownItem[];
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ trigger, items, className, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <div ref={ref} className={styles.root} {...props}>
        <button
          className={styles.trigger}
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {trigger}
        </button>
        {open && (
          <ul className={styles.menu} role="menu">
            {items.map((item) => (
              <li key={item.id} className={styles.item}>
                <button
                  className={styles.itemButton}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    item.onSelect?.();
                    setOpen(false);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";
