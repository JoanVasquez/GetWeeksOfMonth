const getWeeksInMonth = ( momentDate ) =>
{
  const calendar = [];
  let week = [];

  for( let day = 1; day <= momentDate.daysInMonth(); day++ )
  {
    const date = new Date( momentDate.year(), momentDate.month(), day );
    const dateToBeAdded = `${momentDate.year()}-${momentDate.format( 'MM' )}-${day < 10 ? '0' + day : day}`;

    if( day === momentDate.daysInMonth() && date.getDay() > 0 )
    {
      week.push( dateToBeAdded );
      calendar.push( week );
      week = [];
    } else if( date.getDay() > 0 )
    {
      week.push( dateToBeAdded );
    } else if( date.getDay() === 0 )
    {
      week.push( dateToBeAdded );
      calendar.push( week );
      week = [];
    }
  }
  return calendar;
};
