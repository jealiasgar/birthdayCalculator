function getBirthday() {
  var tempJsonObj = document.querySelector(".input_area_1");
  try {
      var jsonObj = JSON.parse(tempJsonObj.value)
      tempJsonObj.value = JSON.stringify(jsonObj, null, 2)
      var inputYear = document.querySelector(".input_year").value;  

  } catch {
    alert('Please enter a valid JSON object!')
  }
  var tempArray = []
    for(var i of jsonObj) {      
        var tempObj = {}                 
        var month = i.birthday.split('/')[0]
        var day = i.birthday.split('/')[1]
        var year = i.birthday.split('/')[2]
        var initials = i.name.split(' ')[0].substring(0,1) + i.name.split(' ')[1].substring(0,1)
        var currentDate = new Date(inputYear, month - 1, day)
        var birthDate = new Date(year, month - 1, day)
        var dayNumber = currentDate.getDay()
        var dayName
        switch (dayNumber) {
            case 0 : {
                dayName = "sunday"
                break
            }
            case 1 : {
                dayName = "monday"
                break
            }
            case 2 : {
                dayName = "tuesday"
                break
            }
            case 3 : {
                dayName = "wednesday"
                break
            }
            case 4 : {
                dayName = "thursday"
                break
            }
            case 5 : {
                dayName = "friday"
                break
            }
            case 6 : {
                dayName = "saturday"
                break
            } 
        }     
        // tempObj.name = i.name
        tempObj.initials = initials
        // tempObj.month = month
        tempObj.dayName = dayName
        tempObj.year = year
        // tempObj.date = date
        // tempObj.day = day
        tempObj.timestamp = birthDate.getTime()        
        tempArray.push(tempObj)
    }    
    tempArray = tempArray.sort((a, b) => {
        return b.timestamp - a.timestamp;
    })    
    
    tempArray = tempArray.reduce(function (acc, cv) {
        if(!acc[cv.dayName]) {
            acc[cv.dayName] = []
        }
        acc[cv.dayName].push(cv)
        return acc
    }, {})    

    var colorArray = []
    for (let groupedDay in tempArray) {
        var matrixSize = Math.ceil(Math.sqrt(tempArray[groupedDay].length))
        var cardElem = document.querySelector(`.${groupedDay}`)        
        var size = cardElem.clientHeight/matrixSize
        for (var day in tempArray[groupedDay]) {
            if(!colorArray[day]){
                colorArray[day] = getRandomColor()
            }
            cardElem.innerHTML += `<div class="cards" style="color: white; height: ${size}px;width: ${size}px; background-color: ${colorArray[day]}">${tempArray[groupedDay][day].initials}</div>`
        }
    }

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }    
    return color;
  }