import React, { useEffect, useState } from "react";
import CreateBookmarkPopup from "../modals/CreateBookmarkPopup";
import Card from "./Card";
import View from "./View";

const BookmarkList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  return (
    <>
      <div class="text-center">
        <div class="row p-2">
          <div class="col">
            <h3>Bookmark Manager</h3>
          </div>
          <div class="col">
            <button className="btn btn-primary" onClick={() => setModal(true)}>
              Add Bookmark
            </button>
          </div>
        </div>
      </div>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
              setShow={setShow}
              show={show}
            />
          ))}
      </div>
      {show ? "" : <View setShow={setShow}  taskList={taskList}/>}

      <CreateBookmarkPopup toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default BookmarkList;
