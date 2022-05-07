$("#currentDay").text(moment().format("dddd, MMMM Do"))

$(".saveBtn").on("click",function(){
    var text= $(this).siblings('.description').val();
    console.log('text', text)
    var time= $(this).parent().attr("id")
    console.log('time', time)
    localStorage.setItem(time, text)
})

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

function colorCode (){
    var current= moment().hours()
    console.log('current', current)
    $(".time-block").each(function(){
        var timeBlock = parseInt($(this).attr("id"))
        console.log('timeBlock', typeof(timeBlock))

        if(timeBlock < current){
            $(this).addClass('past')
        } else if (timeBlock === current){
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
    //if timeblock > present color accordingly
}

colorCode()