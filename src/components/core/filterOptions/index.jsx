import Checkbox from '../checkbox';

export default function Filter (props) {
  const onChange = (payload) => {
    if(props.onChange) {
      props.onChange(payload);
    }
  }
  return <>
    <div className="filter-options">
      <h3>{props.title}</h3>
      {
        props.items.map(
          item => <Checkbox
            key={item.id}
            onChange={() => onChange(item)}
            {...item}
            name={props.name}
           />
        )
      }
    </div>
    <style jsx>{
      `.filter-options {
        border: 1px solid #222;
        margin-bottom: 2rem;
        padding: 1rem;
      }
      .filter-options h3 {
        margin-top: 0;
      }
      `
    }</style>
  </>
}
