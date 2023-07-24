export const classNames = (cls: string, mods: Record<string, boolean> = {}, add: string[] = []): string => [
  cls,
  ...add.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => !!value)
    .map(([className]) => className),
]
  .join(' ')
