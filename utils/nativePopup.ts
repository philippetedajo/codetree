interface Popups {
  pageURL: string;
  pageTitle: string;
  popupWinWidth: number;
  popupWinHeight: number;
}
export function nativePopup({
  pageURL,
  pageTitle,
  popupWinWidth,
  popupWinHeight,
}: Popups) {
  let left = (screen.width - popupWinWidth) / 2;
  let top = (screen.height - popupWinHeight) / 4;

  window.open(
    pageURL,
    pageTitle,
    "resizable=yes, width=" +
      popupWinWidth +
      ", height=" +
      popupWinHeight +
      ", top=" +
      top +
      ", left=" +
      left
  );
}
