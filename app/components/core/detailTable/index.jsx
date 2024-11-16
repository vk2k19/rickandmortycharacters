const DetailTable = (props) => {
  return (
    <>
      <table className="text-white m-1 m-md-3" data-testid="card-details">
        <tbody>
          <tr className="border-bottom border-secondary">
            <th className="fw-normal w-25" scope="row">
              Status
            </th>
            <td className="fw-lighter text-warning text-end">{props.status}</td>
          </tr>
          <tr className="border-bottom border-secondary">
            <th className="fw-normal w-25" scope="row">
              Species
            </th>
            <td className="fw-lighter text-warning text-end">
              {props.species}
            </td>
          </tr>
          <tr className="border-bottom border-secondary">
            <th className="fw-normal w-25" scope="row">
              Gender
            </th>
            <td className="fw-lighter text-warning text-end">{props.gender}</td>
          </tr>
          <tr className="border-bottom border-secondary">
            <th className="fw-normal w-25" scope="row">
              Origin
            </th>
            <td className="fw-lighter text-warning text-end">{props.origin}</td>
          </tr>
          <tr>
            <th className="fw-normal w-25" scope="row">
              Last location
            </th>
            <td className="fw-lighter text-warning text-end">
              {props.location}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DetailTable;
