import { Column } from '../components/DropColumn';

const IndexPage = () => (
  <div className='grid grid-cols-3 justify-center items-center place-items-center'>
    <div>todo</div>
    <div>done</div>
    <div>wip</div>
    <div>
      <Column colNumber={1} backgroundColor='bg-yellow-300' />
    </div>
    <div>
      <Column colNumber={2} backgroundColor='bg-red-300' />
    </div>
    <div>
      <Column colNumber={3} backgroundColor='bg-blue-300' />
    </div>
  </div>
);

export default IndexPage;
