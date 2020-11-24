import {MEGA_BALL_MAX,NORMAL_BALL_MAX,MEGA_BALL_INDEX} from './App'

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
  export {getSixRandomNums,getMatches}