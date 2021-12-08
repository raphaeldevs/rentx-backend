export default function filterQueryBoolean<T>(query: Partial<T>): Partial<T> {
  const params = Object.entries(query).reduce((params, entrie) => {
    if (entrie.every(Boolean)) {
      const [key, value] = entrie;

      Object.assign(params, { [key]: value });
    }

    return params;
  }, {} as Partial<T>);

  return params;
}
