export function Grid() {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" placeholder="Enter Task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>

      <div className="row kg-row">
        <div className="col-4">Buy Milk</div>
        <div className="col-4">4/5/2011</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>

      <div className="row kg-row">
        <div className="col-4">Go to the college</div>
        <div className="col-4">5/5/2011</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
