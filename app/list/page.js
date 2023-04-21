export default function page() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

    return (
      <>
        <h4 className="title">상품목록 </h4>
        {
          상품.map((v,i)=>{
            return (
              <div className="food" key={'food_'+i}>
                <img src={'/food'+i+'.png'} className="food-img"/>
                <h4>{v} $40</h4>
              </div>
            )
          })
        }
      </>
    )

}


