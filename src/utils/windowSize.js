const BREAK_POINT = 883;

export function isTabletMini() {
  return window.innerWidth < BREAK_POINT ? true : false;
}
