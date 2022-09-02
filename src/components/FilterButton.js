const FilterButton = (props) => {
  return (
    <button type="button" onClick={() => props.setFilter(props.btnName)}>
      {props.btnName}
    </button>
  );
};

export default FilterButton;
