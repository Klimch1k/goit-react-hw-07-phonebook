import { useDispatch } from 'react-redux';
import { onFilter } from '../../Redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    dispatch(onFilter(e.target.value));
  };
  return (
    <>
      <input onChange={onChangeFilter} type="text" name="filter" />
    </>
  );
};

export default Filter;
