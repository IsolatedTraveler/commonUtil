export function throttle(fun: any, delay: number) {
  let time: any = null;
  return function () {
    if (!time) {
      let args = arguments;
      time = setTimeout(() => {
        fun.apply(that, args);
        time = null;
      }, delay);
    }
  };
}
