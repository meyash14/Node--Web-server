console.log("js loaded")
/*fetch('http://localhost:3000/weather?address=Boston').then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            console.log(data.error)
        }
        else{
        console.log(data.location)
        console.log(data.forecast)
        }
    })
}) */

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(event)=>{
        event.preventDefault() //preventing from loading of page completely
        const location = search.value
        message1.textContent=''
        message2.textContent = ''
        fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            message1.textContent=data.error
          //message2.textContent = data.error
            //console.log(data.error)
        }
        else{
            message1.textContent=data.location
            message2.textContent = data.forecast
        //console.log(data.location)
        //console.log(data.forecast)
        }
    })
})

        
})