// Set up the drag events for the container
container.addEventListener("dragover", (e) => {
  e.preventDefault();
  const dragging = document.querySelector(".dragging")
  const afterElement = getDragAfterElement(e.clientY)
  if (afterElement == null) {
    container.append(dragging)
  } else {
    container.insertBefore(dragging, afterElement)
  }
})


// This is where we'll be updating the information regarding the location in the list.
container.addEventListener("dragend", (e) => {
  var newIndex = [...container.querySelectorAll(".todo")]
  newIndex.forEach((item, index) => {
    database.collection("todo").doc(item.id).update({"position": index})
  })
})

function getDragAfterElement(y) {
  let elementArray = [...document.querySelectorAll(".todo:not(.dragging)")]
  return elementArray.reduce((accumulator, currentValue) => {
    const box = currentValue.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > accumulator.offset) {
      return { offset: offset, element: currentValue }
    } else {
      return accumulator
    }
  }, { offset: Number.NEGATIVE_INFINITY}).element
}

function dragEndReorderArray() {

}