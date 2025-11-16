/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
export default function deepMerge<T extends object>(
	target: T,
	source: Partial<T>,
): T {
	const output = { ...target }

	for (const key in source) {
		const value = source[key]

		if (value && typeof value === 'object' && !Array.isArray(value)) {
			output[key] = deepMerge((target as any)[key] ?? {}, value as any)
		} else {
			output[key] = value as any
		}
	}

	return output
}
