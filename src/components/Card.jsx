import React, { useState } from "react";
import EditBookmarkPopup from "../modals/EditBookmarkPopup";

const Card = ({
  taskObj,
  index,
  deleteTask,
  updateListArray,
  show,
  setShow,
}) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div>
      <div class="card-wrapper mr-5" style={{ cursor: "pointer" }}>
        <div
          class="card-top"
          style={{ "background-color": colors[index % 5].primaryColor }}
        ></div>
        <div class="task-holder">
          <div class="row">
            <div class="col">
              <p className="mt-1"> {taskObj?.Name}</p>
            </div>
            <div class="col">
              <button
                onClick={() => setShow(false)}
                className="btn btn-outline-primary btn-sm"
              >
                Details
              </button>
            </div>
          </div>
          <a href={taskObj?.Description} target="_blank" rel="noopener">
            {taskObj?.Description}
          </a>
          <p className="pt-2">{taskObj?.Category}</p>

          <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
            <i
              class="far fa-edit mr-3"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => setModal(true)}
            ></i>
            <i
              class="fas fa-trash-alt"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={handleDelete}
            ></i>
          </div>
        </div>
        <EditBookmarkPopup
          modal={modal}
          toggle={toggle}
          updateTask={updateTask}
          taskObj={taskObj}
        />
      </div>
    </div>
  );
};

export default Card;
