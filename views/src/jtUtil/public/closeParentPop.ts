export function closeParentPop() {
  if (w.parent.jtUtil && w.parent.jtUtil.closeFun)
    w.parent.jtUtil.closeFun()
}