import Card from './Card'

export default function CardList({ robots }) {

  // const cardArray = robots.map((user,i) => {
  //   return(
  //     <Card key={robots[i].id} name={robots[i].name} username={robots[i].username} mail = {robots[i].email}/>
  //   )
  // })

  return (

    <div>
      {/* sends params to Card, card will return its component. */}
      
      {/* <Card name={robots[0].name} username={robots[0].username} mail = {robots[0].email}/>
      <Card name={robots[1].name} username={robots[1].username} mail = {robots[1].email}/>
      <Card name={robots[2].name} username={robots[2].username} mail = {robots[2].email}/> */}

      {/* {cardArray} - we can save this cardArray memory by putting it inside the div itself! */}
      {/* { or} */}

      {  
      // Make sure to wrap the function inside {}
          robots.map((user,i) => {
            return(
              <Card key={robots[i].id} name={robots[i].name} username={robots[i].username} mail = {robots[i].email}/>
            );
          })
      }
      
    
    </div>
  );
}
