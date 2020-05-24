export default function Tag(props) {
  const onClick = (event) => {
    if(props.onClick) props.onClick(event)
  };

  return <>
  <button
    className="btn btn-primary btn-sm"
    onClick={onClick}
    aria-label={`clear filter, ${props.category} ${props.label}`}
  >
    <span className="tag-label">{props.label}</span>
    <span className="tag-icon"> X</span>
  </button>
  <style jsx>{
    `
      .btn-primary {
        margin: 0 5px;
      }
      .btn-primary:first-child {
        margin-left: 0;
      }
      .btn-primary:last-child {
        margin-right: 0;
      }
    `
  }
  </style>
  </>
}
