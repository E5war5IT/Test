let courses = [
  { 
    name: "Courses in England",
    prices: [0, 100]
  }, 
  { 
    name: "Courses in Germany",
    prices: [500, null]
  }, 
  { 
    name: "Courses in Italy",
    prices: [100, 200]
  }, 
  { 
    name: "Courses in Russia",
    prices: [null, 400]
  },
  { 
    name: "Courses in China",
    prices: [50, 250]
  },
  { 
    name: "Courses in USA",
    prices: [200, null]
  },
  { 
    name: "Courses in Kazakhstan",
    prices: [56, 324]
  },
  { 
    name: "Courses in France",
    prices: [null, null]
  },
];

/**
 * Sorted array method:
 * 1) Lowest to highest
 * 2) highest to Lowest
 * 3) all, usual
 * 
 * @param {object} props
 * @function
 */
function SortedCards(props){
  let sort, sortMax, sortMin, sortAll;
  let newArray = []; let maxSize = 0;
  let SetArray;
  
  if(props['TypePrices'] === undefined){
    props['TypePrices'] = String('All')
  }
  
  if (props['card'] === undefined){
    throw 'function not have argument: card\nstatus: ' + props['card'];
  }
  
  let TypePrices = props['TypePrices'].toLowerCase();
  
props['card'].forEach((value) => {
 let Things = value.prices;
  for (i = 0; i < Things.length; i++) {
   newArray.push(Things[i]);
  }
});

SetArray = new Set(newArray);
maxSize = Math.max(...SetArray);

props['card'].forEach((value) => {
 let Things = value.prices;
  if(Things[0] == null){
    Things[0] = 0;
  }
});

props['card'].forEach((value) => {
 let Things = value.prices;
  if(Things[1] == null){
    Things[1] = maxSize;
  }
});
 
  if (TypePrices == 'min') {
    sortMax =  props['card'].sort((a, b) => Math.max(...a.prices) - Math.max(...b.prices))
    sort = sortMax;
  } else if (TypePrices == 'max'){
    sortMin =  props['card'].sort((a, b) => Math.max(...b.prices) - Math.max(...a.prices))
    sort = sortMin;
  } else  if (TypePrices == 'all' || 'usual' ){
    sortAll = props['card'].sort();
    sort = sortAll;
  }
   
   return sort;
}

console.log(
SortedCards({ 
   card:  courses,
   TypePrices: 'Max'
}));
