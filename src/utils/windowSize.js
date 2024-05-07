const BREAK_POINT = 870;

export function isTabletMini() {
  console.log(window.innerWidth < BREAK_POINT ? true : false);
  return window.innerWidth < BREAK_POINT ? true : false;
}
