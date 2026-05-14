import { useId, useMemo, useState, type KeyboardEvent } from "react";
import { cn } from "../../utils/cn";
import { tabButton, tabList, tabPanel, tabsRoot } from "./Tabs.css";
import type { TabsProps } from "./Tabs.types";

export const Tabs = ({
  items,
  defaultValue,
  value,
  onValueChange,
  size = "md",
  variant = "primary",
  className,
  style
}: TabsProps) => {
  const generatedId = useId();
  const initialValue = useMemo(
    () => defaultValue ?? items.find((item) => !item.disabled)?.id ?? "",
    [defaultValue, items]
  );

  const [internalValue, setInternalValue] = useState(initialValue);
  const activeId = value ?? internalValue;
  const activeTab = items.find((item) => item.id === activeId) ?? items[0];

  const setActiveTab = (nextId: string) => {
    if (!value) {
      setInternalValue(nextId);
    }

    onValueChange?.(nextId);
  };

  const onKeyDown = (currentIndex: number, event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;

    let nextIndex = currentIndex;

    for (let i = 0; i < items.length; i += 1) {
      nextIndex = (nextIndex + direction + items.length) % items.length;
      if (!items[nextIndex]?.disabled) {
        break;
      }
    }

    const nextTab = items[nextIndex];
    if (!nextTab || nextTab.disabled) {
      return;
    }

    setActiveTab(nextTab.id);
  };

  if (!items.length) {
    return null;
  }

  return (
    <div className={cn(tabsRoot, className)} style={style}>
      <div className={tabList} role="tablist" aria-label="Tabs">
        {items.map((item, index) => {
          const isActive = item.id === activeTab.id;
          const tabId = `${generatedId}-${item.id}-tab`;
          const panelId = `${generatedId}-${item.id}-panel`;

          return (
            <button
              key={item.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              disabled={item.disabled}
              tabIndex={isActive ? 0 : -1}
              className={tabButton({ size, variant, active: isActive })}
              onClick={() => setActiveTab(item.id)}
              onKeyDown={(event) => onKeyDown(index, event)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${generatedId}-${activeTab.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${generatedId}-${activeTab.id}-tab`}
        className={tabPanel}
      >
        {activeTab.content}
      </div>
    </div>
  );
};
