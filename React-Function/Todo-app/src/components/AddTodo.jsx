function AddTodo() {
  return <div class="container text-center">
    <div class="row newRow">
      <div class="col-6">
        <input type="text" placeholder="Enter the task.." />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-success newbutton">Add</button>
      </div>
    </div>
  </div>
}
export default AddTodo;