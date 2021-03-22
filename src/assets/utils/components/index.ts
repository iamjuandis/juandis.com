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
