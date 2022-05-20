//To use luxon rather than moment
// var DateTime = luxon.DateTime;
// let time = DateTime.now().toLocaleString(DateTime.DATE_MED);
var currentday = $('#currentDay');
var container = $('.container');

// Show today's date in the header
let currenttime = moment().format('MMMM Do YYYY');
currentday.text(currenttime);

//Build hourbox and color it for each hour with this structure:
  /* <div class="row hourbox">
        <div class="col-md-1 hour">
          Hour
        </div>
        <textarea class="col-md-10 task">
          TaskInput
        </textarea>
        <button class="btn col-md-1">
          Save
        </button>
    </div> */
function buildCard(hournumber){

    var hourbox = document.createElement("div");
    hourbox.setAttribute("class","row hourbox");
    hourbox.id = hournumber;
    var textarea = document.createElement ('textarea');
    textarea.setAttribute("class","col-md-10 task");
    var hour = document.createElement ('div');
    hour.setAttribute("class",'col-md-1 hour');
    hour.textContent=hournumber;
    var saveBtn = document.createElement ('button');
    saveBtn.setAttribute("class",'btn saveBtn col-md-1');
    saveBtn.setAttribute("style","background-color:#add8e6; color:white");
    saveBtn.innerHTML= "Save";
    hourbox.appendChild(hour);
    hourbox.appendChild(textarea);
    hourbox.appendChild(saveBtn);
    console.dir(hourbox);
    container.append(hourbox); // if using jquery use append rather than appendChild.
    
    // Color the box depends on the current hour
    var currenthour = moment().hour();
    if (hournumber === currenthour){
      textarea.setAttribute("style","background-color:#ff726f");
    }
    else if (hournumber <currenthour){
      textarea.setAttribute("style","background-color:grey");
    }
    else {
      textarea.setAttribute("style","background-color:#90EE90");
    }
  }    

// Generate hour boxes and reload tasks from local storage
for(let i=9; i <18; i++){
  buildCard(i);
  $('#'+i+' .task').val(localStorage.getItem(i));
}

// Save tasks to local storage when save button is clicked
$('.saveBtn').on("click",function(){
  console.log(this);
  var index = $(this).parent().attr("id");
  var task = $(this).siblings(".task").val();
  localStorage.setItem(index,task);
});
