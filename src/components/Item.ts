export const DnDItems = {
  Column: 'Column',
} as const;

export type DnDItems = typeof DnDItems[keyof typeof DnDItems];
