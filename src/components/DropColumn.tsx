import React, { VFC } from 'react';
import { useDrop } from 'react-dnd';
import { useRecoilValue } from 'recoil';
import { droppedColumnState } from '../recoil/dropColumn';
import { DraggableItem } from './DraggableItem';
import { DnDItems } from '../dnd/DnDItem';

export type DropResult = {
  colNumber: number;
};

type Props = {
  colNumber: number;
  backgroundColor: string;
};

export const Column: VFC<Props> = ({ colNumber, backgroundColor }) => {
  const [, drop] = useDrop({
    accept: DnDItems.Column,
    drop: () => ({ colNumber }),
  });

  const isDropped = useRecoilValue(droppedColumnState) === colNumber;

  return (
    <div
      ref={drop}
      className={`flex justify-center items-center h-96 w-48 ${backgroundColor}`}
    >
      {isDropped && <DraggableItem name='Drag Item' />}
    </div>
  );
};
