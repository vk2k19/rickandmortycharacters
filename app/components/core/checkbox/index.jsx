export default function Checkbox(props) {
  const id = `checkbox-${props.id}`;

  const onChange = (event) => {
    if (props.onChange && props.onChange instanceof Function) {
      props.onChange(event)
    }
  }

  return <div className="form-checkbox g-0 row"  data-testid="checkbox">
      <div className="checkbox-inline">
      <input type="checkbox" className="form-check-input" name={props.name} id={id} onChange={onChange} value={props.value} checked={props.selected}></input>
      <label htmlFor={id} className="form-check-label ps-1"> {props.label}</label>
      </div>
    </div>;
}
