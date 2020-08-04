export const getIncomeArrayForChart = ({ui_reducer}, afterTaxIncomeObject) => {

  const { selectedUser, selectedAccount }  = ui_reducer 

  const convertObjectToArrayForChart = (object, user) => {
    if (selectedAccount=== "after tax") {
     return  Object.values(object).map(d =>  d[user].afterTaxIncomeStreams)
    }
   return Object.values(object).map(d =>  d[user].beforeTaxIncomeStreams)

  }

  const convertObjectToCombinedArrayForChart = (object) => {

    if (selectedAccount=== "after tax") {
      return Object.values(object).map((d:any) =>  ({...d.user1.afterTaxIncomeStreams, ...d.user2.afterTaxIncomeStreams}))
    }
return Object.values(object).map((d:any) =>   ({...d.user1.beforeTaxIncomeStreams, ...d.user2.beforeTaxIncomeStreams}))

  }
  
  switch(selectedUser) {
    case('user1'): return convertObjectToArrayForChart(afterTaxIncomeObject, 'user1')
    case('user2'): return convertObjectToArrayForChart(afterTaxIncomeObject, 'user2')
    case('combined'): return convertObjectToCombinedArrayForChart(afterTaxIncomeObject)
  }
}