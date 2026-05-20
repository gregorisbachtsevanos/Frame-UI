import { HTMLAttributes } from "react";
import * as styles from "./Calendar.css.js";

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
	month?: string;
}

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* fake data for now (we'll replace with real logic later) */
const days = Array.from({ length: 35 }, (_, i) => {
	const day = i - 2;
	return {
		label: day > 0 && day <= 31 ? day : null,
		outside: day <= 0 || day > 31,
		today: day === 14,
		selected: day === 18,
	};
});

export function Calendar({ month = "January 2026", ...props }: CalendarProps) {
	return (
		<div className={styles.root} {...props}>
			{/* Header */}
			<div className={styles.header}>
				<button className={styles.navButton}>‹</button>
				<div>{month}</div>
				<button className={styles.navButton}>›</button>
			</div>

			{/* Week labels */}
			<div className={styles.weekRow}>
				{weekDays.map((d) => (
					<div key={d}>{d}</div>
				))}
			</div>

			{/* Grid */}
			<div className={styles.grid}>
				{days.map((d, i) => {
					if (!d.label) {
						return <div key={i} />;
					}

					return (
						<div
							key={i}
							className={[
								styles.day,
								d.today ? styles.today : "",
								d.selected ? styles.selected : "",
								d.outside ? styles.outside : "",
							].join(" ")}
						>
							{d.label}
						</div>
					);
				})}
			</div>
		</div>
	);
}
