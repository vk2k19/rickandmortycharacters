"use client";
export default function Tag(props) {
  const onClick = (event) => {
    if (props.onClick) props.onClick(event);
  };

  return (
    <button
      className="btn btn-primary btn-sm col-auto"
      onClick={onClick}
      aria-label={`clear filter, ${props.category} ${props.label}`}
      data-testid="tag"
    >
      <span className="tag-label col-auto">{props.label}</span>
      <span className="tag-icon ps-1 col-auto">X</span>
    </button>
  );
}
