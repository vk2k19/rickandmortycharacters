import Checkbox from '@/app/components/core/checkbox';

export default function Filter (props) {
  const onChange = (payload) => {
    if(props.onChange) {
      props.onChange(payload);
    }
  }
  return <div className="col-auto flex-grow-1 border border-light py-3 rounded"  data-testid="filter-options">
      <h3>{props.title}</h3>
      {
        props.items.map(
          item => 
          <Checkbox
            key={item.id}
            onChange={() => onChange(item)}
            {...item}
            name={props.name}
           />
        )
      }
    </div>
}
