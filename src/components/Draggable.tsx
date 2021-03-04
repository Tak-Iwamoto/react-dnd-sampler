import { VFC } from 'react';
import { useDrag } from 'react-dnd';
import { useRecoilState } from 'recoil';
import { droppedColumnState } from '../recoil/atom/dropColumn';
import { DropResult } from './Column';
import { DnDItems } from './Item';

type Props = {
  name: string;
};

export const DraggableItem: VFC<Props> = ({ name }) => {
  const [, setDroppedColumn] = useRecoilState(droppedColumnState);

  const [collected, drag] = useDrag({
    item: {
      type: DnDItems.Column,
    },
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult() as DropResult;
      if (dropResult) {
        setDroppedColumn(dropResult.columnNumber);
      }
    },
    collect: (monitor) => {
      return { dragging: monitor.isDragging() };
    },
  });

  const { dragging } = collected;

  const opacity = dragging ? 'opacity-50' : 'opacity-100';

  return (
    <div
      ref={drag}
      className={`flex justify-center items-center rounded-2xl h-28 w-40 bg-white ${opacity}`}
    >
      <div>{name}</div>
    </div>
  );
};
