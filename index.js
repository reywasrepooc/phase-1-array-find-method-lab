
function superbowlWin(record) {
    function hasAWin(element, index, array) {
        return (element.result === 'W')
    } 
    let superbowlWin = record.find(hasAWin)
    console.log(superbowlWin)
    
    if (typeof superbowlWin === "object") { 
        return superbowlWin.year
   } else {
       return undefined
   }
}