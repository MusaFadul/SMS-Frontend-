import dataSource from './data.json'

export  const initialList = () => {
    return dataSource;
}

export  const dateTRangeFilteredist = ( startDate , endDate) => {
    var stDate = new Date(startDate);
    var edDate = new Date(endDate);
    const filterdList = []
    for(let singleItem of dataSource){
     const singleItemStDate = new Date(singleItem.start_date)
     const singleItemEdDate = new Date(singleItem.end_date)
     if( singleItemStDate.valueOf() >= stDate.valueOf() &&  singleItemEdDate.valueOf() <= edDate.valueOf()) {
      filterdList.push(singleItem)
     }
   }
   return filterdList;
}

export  const priceRangeFilteredist = ( minPrice , maxPrice) => {
    const filterdList = []
    for(let singleItem of dataSource){
    if( singleItem.price >= minPrice &&  singleItem.price <=  maxPrice) {
      filterdList.push(singleItem)
     }
   }
   return filterdList;
}

export  const statusFilteredist = ( status) => {
    const filterdList = []
        for(let singleItem of dataSource){
    if( singleItem.status === status) {
        filterdList.push(singleItem)
     }
   }
   return filterdList;
}

