const SlotM = () => {
  const slots = ["❤", "🤡", "👀", "🎰", "🍌"];
  let newArray = [[], [], []];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let index = Math.floor(Math.random() * slots.length);
      newArray[i].push(slots[index]);
    }
  }
  console.log(newArray);
  for (let i = 0; i < 3; i++) {
    if (
      newArray[0][i] === newArray[1][i] &&
      newArray[0][i] === newArray[2][i]
    ) {
      return (
        <>
          {newArray.map((num, i) => {
            return <li key={i}>{num}</li>;
          })}
          <div>YOU WON NIGGA</div>
        </>
      );
    }
  }
  return (
    <>
      {newArray.map((num, i) => {
        return <li key={i}>{num}</li>;
      })}
      <div>YOU LOST NIGGA</div>
    </>
  );
};

export default SlotM;
