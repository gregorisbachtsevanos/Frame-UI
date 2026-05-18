import { HTMLAttributes, ReactNode, useState } from "react";
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

export function DropdownMenu({ trigger, items, ...props }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root} {...props}>
      <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {trigger}
      </button>
      {open ? (
        <ul role="menu">
          {items.map((item) => (
            <li key={item.id}>
              <button
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
      ) : null}
    </div>
  );
}
