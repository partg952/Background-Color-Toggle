var button = document.getElementById('button')
var num = true
button.addEventListener('click' , function(){
    if(num==true){
        console.log('clicked')
        document.getElementById('body').style.background = 'yellow'
        num = false
    }
else{
    console.log('clicked')
    document.getElementById('body').style.background = 'red'
    num = true
}
    })