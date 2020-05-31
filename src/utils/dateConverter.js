
const month = {
    "01" : 'Jan',
    "02" : 'Feb',
    "03" : 'Mar',
    "04" : 'Apr',
    "05" : 'May',
    "06" : 'Jun',
    "07" : 'July',
    "08" : 'Aug',
    "09" : 'Sep',
    "10" : 'Oct',
    "11" : 'Nov',
    "12" : 'Dec',
  
}


export function dateConverter(date){
    let trimmedDate = date.slice(0, 10).split('-')

    return `${trimmedDate[2]} ${month[trimmedDate[1]]}, ${trimmedDate[0]}`
}