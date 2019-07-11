const request =require('request')

const weather = (lat,lon,callback)=>
{   
    const url = 'https://api.darksky.net/forecast/a96c05549dd7ddc0ee460a4ccb450208/'+ lat+','+ lon +'?units=auto'
   //request({url:url,json: true},(error,response)=>{ //normal way down is es6 shorthand
   //destructured response as only body is that we are using
    request({url,json: true},(error,{body})=>{
        //console.log(response.body.daily.data[0].temperatureLow)
    
        if(error)
        {
            callback('Error in darksky',undefined)
        }
        else if(body.daily.data.length===0) //destructuring response
        {
            callback('Darksky array empty',undefined)
        }
        else{
        callback(undefined,{
            temp: body.daily.data[0].temperatureLow
        })
    }
    
    })
}
module.exports = weather