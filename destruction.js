const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
  let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

  console.log(e,pi,gravity, bodyTemp, boilingTemp)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let [num1, num2, num3, ...rest] = nums
  
  console.log(num1, num2, num3)
  console.log(rest)


  ///Destructuring Object

  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter)


  const rectangle2 = {
    width1: 20,
    height1: 10,
    area1: 200
  }
  let { width1, height1, area1, perimeter1 = 60 } = rectangle2//peri metreye atabndır

  
  console.log(width1, height1, area1, perimeter1) //20 10 200 60
  //Let us modify the object:width to 30 and perimeter to 80