import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
};

export default App;
