export const createElem = (
  elemName: string,
  parent: HTMLElement,
  classes?: string
): HTMLElement => {
  const elem = document.createElement(elemName);
  if (classes != null) {
    const classlist = classes.split(' ');
    elem.classList.add(...classlist);
  }
  parent.append(elem);

  return elem;
};
