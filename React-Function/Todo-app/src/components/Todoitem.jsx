function Todoitem() {


  let todoTask ='Buy milk'
  let todoDate ='04/06/2024'
  return <div class="container">
    <div class="row newRow">
      <div class="col-6">
        {todoTask}
      </div>
      <div class="col-4">
        {todoDate}
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-danger newbutton">Delete
        </button>
      </div>
    </div>
  </div>
}
export default Todoitem