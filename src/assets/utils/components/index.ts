export const scrollToIDElement = (id: any) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const yOffset = -50;
    const element = document.getElementById(id);
    const yPos = (element?.getBoundingClientRect()?.top ?? 0) + window.pageYOffset + yOffset;
    return window.scrollTo({ top: yPos, behavior: 'smooth' });
  }
};

export const handleGridRangeProject = (length: number, position: number) => {
  switch (true) {
    case length === 1:
      return [1, -1, 'large'];
    case length > 1 && position === 0:
      return [1, 6, 'small'];
    case length > 1 && position === 1:
      return [6, -1, 'big'];
    case length === 3 && position === 2:
      return [1, -1, 'large'];
    case length === 4 && position === 2:
      return [1, 8, 'big'];
    case length === 4 && position === 3:
      return [8, -1, 'small'];
    case length > 4 && position === 2:
      return [1, -1, 'large'];
    case length > 4 && position === 3:
      return [1, 8, 'big'];
    case length > 4 && position === 4:
      return [8, -1, 'small'];
    default:
      return [1, -1, 'large'];
  }
};

const months: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const HandleAlignment = (alignment: string) => {
  const splitAlignment: string[] = alignment.split('-');
  const size: string = splitAlignment[0];
  const position: string = splitAlignment[1];

  switch (size) {
    case 'wide':
      return {
        maxWidth: '1200px',
        gridTemplate: position === 'left' || position === 'right' ? 'repeat(14, 1fr)' : '1fr',
        direction: position === 'up' || position === 'right' ? 'ltr' : 'rtl',
        size: size,
        position: position,
        gridColumnText: position === 'left' ? '7 / 11' : position === 'right' ? '3 / 7' : '1 / -1',
        gridColumnImage: position === 'left' ? '1 / 7' : position === 'right' ? '7 / -1' : '1 / -1',
      };

    case 'mid':
      return {
        maxWidth: '1024px',
        gridTemplate: position === 'left' || position === 'right' ? 'repeat(12, 1fr)' : '1fr',
        direction: position === 'up' || position === 'right' ? 'ltr' : 'rtl',
        size: size,
        position: position,
        gridColumnText: position === 'left' ? '7 / -1' : position === 'right' ? '1 / 7' : '1 / -1',
        gridColumnImage: position === 'left' ? '1 / 7' : position === 'right' ? '7 / -1' : '1 / -1',
      };

    default:
      return {
        maxWidth: '1200px',
        gridTemplate: 'repeat(14, 1fr)',
        direction: 'rtl',
      };
  }
};

export const SetYearFromString = (stringDate: string) => {
  const month: string = stringDate.split('/')[0];
  const year: number | string = stringDate.split('/')[1];
  if (month === 'Present') return month;
  return `${months[parseFloat(month) - 1]}. ${year}`;
};
