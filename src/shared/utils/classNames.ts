export const classNames = (cls: string, mods: Record<string, boolean> = {}, add: string[] = []): string => {
  return [
    cls,
    ...add.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([cls]) => cls)
  ]
    .join(' ')
}
