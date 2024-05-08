const BREAK_POINT = 867;

export function isTabletMini() {
  return window.innerWidth <= BREAK_POINT ? true : false;
}
