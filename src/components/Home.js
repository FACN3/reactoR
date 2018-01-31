import React from 'react';

export const ToDoList = props => {
  return <ul><li>{props.msg}</li></ul>;
}

export const Task = () => {
  return(  <div>
    <ToDoList msg="Gym Time" />
    <ToDoList msg="Food Time" />
    <ToDoList msg="Drink Time" />
  </div>);
}
