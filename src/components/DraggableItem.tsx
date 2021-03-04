import { VFC } from 'react';
import { useDrag } from 'react-dnd';
import { useRecoilState } from 'recoil';
import { droppedColumnState } from '../recoil/dropColumn';
import { DropResult } from './DropColumn';
import { DnDItems } from '../dnd/DnDItem';

type Props = {
  name: string;
};

export const DraggableItem: VFC<Props> = ({ name }) => {
  const [, setDroppedColumnNumber] = useRecoilState(droppedColumnState);

  const [collected, drag] = useDrag({
    item: {
      type: DnDItems.Todo,
    },
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult() as DropResult;
      if (dropResult) {
        setDroppedColumnNumber(dropResult.colNumber);
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
