import React from "react";

const View = ({ setShow, taskList }) => {
  console.log(taskList);
  return (
    <div className="task-container">
      <div class="row">
        <div class="col-sm-10">
          <div class="card">
            <div class="card-body">
              {taskList && taskList.map((obj, index) => <h5>{obj?.Name}</h5>)}
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => setShow(true)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
