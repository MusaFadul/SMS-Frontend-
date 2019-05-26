import dataSource from './data.json'

export  const initialList = () => {
    return dataSource;
}

export  const dateTRangeFilteredist = ( startDate , endDate) => {
    var stDate = new Date(startDate);
    var edDate = new Date(endDate);
    const filteredList = []
    for(let singleItem of dataSource){
     const singleItemStDate = new Date(singleItem.start_date)
     const singleItemEdDate = new Date(singleItem.end_date)
     if( singleItemStDate.valueOf() >= stDate.valueOf() &&  singleItemEdDate.valueOf() <= edDate.valueOf()) {
      filteredList.push(singleItem)
     }
   }
   return filteredList;
}

export  const priceRangeFilteredist = ( minPrice , maxPrice) => {
    const filteredList = []
    for(let singleItem of dataSource){
    if( singleItem.price >= minPrice &&  singleItem.price <=  maxPrice) {
      filteredList.push(singleItem)
     }
   }
   return filteredList;
}

export  const statusFilteredist = ( status) => {
    const filteredList = []
        for(let singleItem of dataSource){
    if( singleItem.status === status) {
      filteredList.push(singleItem)
     }
   }
   return filteredList;
}

export  const CityNameFilteredist = ( name ) => {
  console.log(name)
  let filteredList = []
  if(name.length === 0 ) {
      filteredList = dataSource
  }

  for(let singleItem of dataSource){
    if( singleItem.city === name) {
      filteredList.push(singleItem)
    }
 }
 return filteredList;
}

