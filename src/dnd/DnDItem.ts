export const DnDItems = {
  Todo: 'Todo',
} as const;

export type DnDItems = typeof DnDItems[keyof typeof DnDItems];
