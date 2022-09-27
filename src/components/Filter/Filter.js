import { useDispatch } from "react-redux";
import { addFilter } from "redux/store";

export function Filter() {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(addFilter(e.target.value));
  }

  return(
    <label>
      Find contacts by name <br />
      <input type="text" onChange={changeFilter} />
      </label>
  )
}