const request = require('request')

const geoCode = (address,callback) =>{
    
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoibWV5YXNoMTQiLCJhIjoiY2p4NW51YmF6MDNjZTN5cncxcDhhd2NiYSJ9.oyjXNGesX8bZT2db6nCsmw&limit=1'
        request({url,json: true},(error,{body})=>{
    
            if(error)
            {
                callback('Unable to connect',undefined)
            }
            else if(error)//else if(body.features.length===0)
            {
                callback('Location not found',undefined)
            }
            else{
                // const latitude = response.body.features[0].center[1]
                // const longitude = response.body.features[0].center[0]
                // const data = []
                // data.push(latitude)
                // data.push(longitude)
                
                callback(undefined,{
                    latitude : body.features[0].center[1],
                    longitude : body.features[0].center[0],
                    location : body.features[0].place_name
                })
            }
              })
   
        
    
}

module.exports = geoCode