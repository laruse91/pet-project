export const classNames = (cls: string, mods: Record<string, boolean>, add: string[]): string => {
  return [
    cls,
    ...add,
    ...Object.entries(mods)
      .filter(([_, values]) => !!values)
      .map((cls) => cls)
  ]
    .join(' ')
}
