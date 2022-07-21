import { useState } from "react";

export default function useToggle(defaultValue) {
	const [value, setValue] = useState(defaultValue);

	function toggleValue(value) {
		setValue((currValue) => (typeof value === "boolean" ? value : !currValue));
	}

	return [value, toggleValue];
}
