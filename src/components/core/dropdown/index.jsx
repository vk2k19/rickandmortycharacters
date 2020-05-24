export default function Dropdown(props) {
  const onChange = (event) => {
    if (props.onChange && props.onChange instanceof Function) {
      props.onChange(event.target.value)
    }
  }

  return <>
    <p className="form-inline">
      <label htmlFor="props.id">{props.label}</label>
      <br />
      <select className="form-input mr-sm-2" name={props.name} id={props.id} onChange={onChange} value={props.value}>
        {props.options && props.options.map(option =>
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        )}
      </select>
    </p>
    <style jsx>{`
      @media (max-width: 991px) {
        .form-input {
          width: 100%;
        }
      }
      `
    }</style>
  </>;
}
