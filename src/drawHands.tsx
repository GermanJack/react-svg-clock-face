function drawHand(
  ID: string,
  length: number,
  width: number,
  pointy: boolean,
  color: string,
  SVG: SVGSVGElement,
  radius: number,
  drawHands: boolean,
) {
  if (!drawHands) {
    return
  }

  if (!pointy) {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

    const x = width / 2
    const y = -length + (length / 100) * 10

    c.setAttribute('width', width.toString())
    c.setAttribute('height', length.toString())
    c.setAttribute('id', ID)
    c.setAttribute('x', `-${x}`)
    c.setAttribute('y', `${y}`)
    c.setAttribute('fill', color)
    c.setAttribute('rx', radius.toString())
    c.setAttribute('ry', radius.toString())

    SVG.appendChild(c)
  } else {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')

    const x = width / 2
    const y1 = -length + (length / 100) * 10
    const y2 = (length / 100) * 10

    c.setAttribute('points', `0,${y1} ${x},0 0,${y2} -${x},0`)
    c.setAttribute('id', ID)
    c.setAttribute('fill', color)

    SVG.appendChild(c)
  }
}

export { drawHand }
