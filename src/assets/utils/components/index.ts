export const scrollToIDElement = (id: any) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const yOffset = -100;
    const element = document.getElementById(id);
    const yPos = (element?.getBoundingClientRect()?.top ?? 0) + window.pageYOffset + yOffset;
    return window.scrollTo({ top: yPos, behavior: 'smooth' });
  }
};
