
// Mark habits as complete or incomplete 
document.querySelectorAll(".day-checkbox").forEach((checkbox)=> {
  checkbox.addEventListener("change", function() {
    const habit = this.dataset.habit;
    const day = this.dataset.day;
    const completed = this.checked;

    //  console.log(`Habit: ${habit}, Day: ${day}, Checked: ${this.checked}`);

    fetch("habits", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "habit": habit,
        "day": day,
        "completed": completed
      }),
    })
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((data) => console.log(`Updated ${habit} for ${day}`, data))
        .catch((err) => console.log(err));
    });
  });


//Delete Habits
document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", function() {
    const habit = this.dataset.habit;

    fetch("habits", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       "habit": habit
      }),
    })
        .then((repsonse) => {
          if (repsonse.ok) {
            console.log(`${habit} deleted`);
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    });
  });

/*
Array.from(completeBtn).forEach(function (completeBtn) {
 completeBtn.addEventListener("click", function () {
  //  const name = this.parentNode.parentNode.childNodes[1].innerText;
  //  const habit = this.parentNode.parentNode.childNodes[3].innerText;

   // fetch('habits', {
   //   method: 'put',
   //   headers: {'Content-Type': 'application/json'},
   //   body: JSON.stringify({
   //     'username': name,
   //     'habit': habit
   //   })
   // })
   // .then(response => {
   //   if (response.ok) return response.json()
   // })
   // .then(data => {
   //   console.log(data)
   //   window.location.reload(true)
   // })
 });
});
*/

// Array.from(thumbDown).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messagesDown', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const habit = this.parentNode.parentNode.childNodes[3].innerText

//         fetch('habits', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'username': name,
//             'habit': habit
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
