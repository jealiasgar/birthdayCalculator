function getBirthday() {
  var jsonObj = document.querySelector(".input_area_1").value;
  var year = document.querySelector(".input_year").value;

  for(var i of jsonObj) {
      var tempArray = []
      var month = i.birthday.split('/')[0]
      var day = i.birthday.split('/')[1]
      var year = i.birthday.split('/')[2]
      var initials = i.name.split(' ')[0].substring(0,1) + i.name.split(' ')[1].substring(0,1)
      tempArray[year].push()
      Object.assign({}, )
  }
}
