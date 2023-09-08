export function load(content, icon = 0) {
  var font = 24, width = (content.length + 3) * font
  return layui.layer.load(icon, {
    content: content ? `<span style="position: absolute; top: ${font}px;font-size:24px;width: ${width}px;text-align: center;left:-${width / 2 - 40}px;line-height:2em;max-width:45vw; ">${content}...</span>` : ''
  })
}