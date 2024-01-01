const DetailTable  = props => {
  return <>
      <table className='card-details' data-testid="card-details">
        <tbody>
          <tr>
            <th scope="row">Status</th>
            <td>{props.status}</td>
          </tr>
          <tr>
            <th scope="row">Species</th>
            <td>{props.species}</td>
          </tr>
          <tr>
            <th scope="row">Gender</th>
            <td>{props.gender}</td>
          </tr>
          <tr>
            <th scope="row">Origin</th>
            <td>{props.origin}</td>
          </tr>
          <tr>
            <th scope="row">Last location</th>
            <td>{props.location}</td>
          </tr>
        </tbody>
      </table>
    <style jsx>{`
      .card-details {
        color: #fff;
        text-align: left;
        margin: 0 10px;
      }
      .card-details tr:not(:last-child) {
        border-bottom: 1px solid #666;
      }
      .card-details th {
        font-size: 1.2rem;
        width: 20%;
        padding: 1rem 0;
        text-transform: uppercase;
      }
      .card-details td {
        font-size: 1.2rem;
        padding: 1rem 0;
        color: orange;
        text-align: right;
      }
      `}
    </style>
  </>
}

export default DetailTable;
