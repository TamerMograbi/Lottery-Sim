import {MEGA_BALL_MAX,NORMAL_BALL_MAX,MEGA_BALL_INDEX} from './App'

const DAYS_IN_A_YEAR = 365
const DAYS_IN_A_CENTURY = 36500

function getSixRandomNums() {
    let rndNums = new Array(6).fill(0)
    return rndNums.map((num,index) => {
      if(index === MEGA_BALL_INDEX) {
        return 1 + Math.floor(Math.random() * Math.floor(MEGA_BALL_MAX))
      }
      else {
        return 1 + Math.floor(Math.random() * Math.floor(NORMAL_BALL_MAX))
      }
      
    })
}
//returns an array where index i contains true if numbers match
function getMatches(arr1,arr2) {
    return arr1.map((val,index) => val === arr2[index])
}

function getDaysYearsPassed(num) {
  let res = ""
  if(num < DAYS_IN_A_YEAR) {
    res = num.toString() + ' days'
  } else if(num < DAYS_IN_A_CENTURY){
    res = (Math.round(num/DAYS_IN_A_YEAR)).toString() + ' years ' + (num%DAYS_IN_A_YEAR).toString() + ' days'
  } else {
    let centuries = Math.round(num/DAYS_IN_A_CENTURY)
    let yearsAfterRemovingCenturies = Math.round(num%DAYS_IN_A_CENTURY/DAYS_IN_A_YEAR)
    res = (centuries).toString() + (centuries === 1 ? ' century ' : ' centuries ')
     +  (yearsAfterRemovingCenturies).toString() + ' years'
  }
  return res
}
  export {getSixRandomNums,getMatches,getDaysYearsPassed}