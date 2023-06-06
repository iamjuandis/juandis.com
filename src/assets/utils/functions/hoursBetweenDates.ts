const hoursBetweenDates = (timeThen: string) => {
  const firstTime = new Date(timeThen);
  const currentTime = new Date();

  var difference = (currentTime?.getTime() - firstTime?.getTime()) / 1000;
  difference /= 60 * 60;
  const rounded = Math.round(difference);
  return Math.abs(rounded);
};

export default hoursBetweenDates;
