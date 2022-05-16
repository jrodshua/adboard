// utility for top campaign component.
// calculates each campaigns roas and 
// returns new list with campaign name and roas sorted

function handleRoas(array) {
  if (!array.length) return;

  const allRoas = [];

  for (let i = 0; i < array.length; i++) {
    const rev = getRoas(array[i].revenue_list);
    const spend = getRoas(array[i].spend_list);
    const roas = (rev / spend) * 100;
    allRoas.push([array[i].name, roas])
  }
}

const getRoas = (array) => {

}