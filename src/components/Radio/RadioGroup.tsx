import { Radio } from "./Radio";
import type { RadioGroupProps } from "./radio.types";

export const RadioGroup = ({
  name,
  value,
  options,
  onChange
}: RadioGroupProps) => {
  return (
    <div role="radiogroup">
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          checked={value === option.value}
          disabled={option.disabled}
          label={option.label}
          onChange={() => onChange?.(option.value)}
        />
      ))}
    </div>
  );
};
