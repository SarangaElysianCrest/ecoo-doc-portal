import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue = null) => {
	const [oldKey, setOldKey] = useState(key);
	const [value, setValue] = useState(() => {
		const item = localStorage.getItem(key);
		if (item !== null) {
			try {
				return JSON.parse(item);
			} catch {
				return defaultValue;
			}
		}
		return defaultValue;
	});

	useEffect(() => {
		const rawValue = JSON.stringify(value);
		localStorage.setItem(key, rawValue);
		setOldKey(key);
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;
