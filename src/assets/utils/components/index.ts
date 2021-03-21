export const scrollToIDElement = (id: any) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const yOffset = -100;
    const element = document.getElementById(id);
    const yPos = (element?.getBoundingClientRect()?.top ?? 0) + window.pageYOffset + yOffset;
    return window.scrollTo({ top: yPos, behavior: 'smooth' });
  }
};

export const handleGridRangeProject = (length: number, position: number) => {
  console.info(length, position);
  switch (true) {
    case length === 1:
      return [1, -1, 'large'];
    case length === 2 && position === 0:
      return [1, 6, 'small'];
    case length === 2 && position === 1:
      return [6, -1, 'big'];
    default:
      return [1, -1, 'large'];
  }
};
