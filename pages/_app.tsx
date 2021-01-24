import { AppProps } from 'next/app';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DndProvider
      backend={HTML5Backend}
      options={{
        enableTouchEvents: true,
        enableMouseEvents: true,
        enableHoverOutsideTarget: true,
      }}
    >
      <Component {...pageProps} />
    </DndProvider>
  );
};

export default App;
