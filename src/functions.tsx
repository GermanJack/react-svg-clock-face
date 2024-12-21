import Clock from './Clock'
import { drawAllCircle } from './drawCircle'

function drawClock(clock: Clock, SVG: SVGSVGElement) {
  delSVG(SVG)
  drawAllCircle(clock, SVG)
}

function setHandsToTime(clockiID: string, time: string, CCW: boolean, Twentyfour: boolean) {
  const HHand = document.getElementById('HourHand' + clockiID)
  const MHand = document.getElementById('MinuteHand' + clockiID)
  const SHand = document.getElementById('SecondHand' + clockiID)

  const t = time.split(':')
  const h = parseInt(t[0], 10)
  const m = parseInt(t[1], 10)
  let s = 0
  // if (t.length === 3) {
  s = parseInt(t[2], 10)
  // }

  let hr: number = 0
  let mr: number = 0
  let sr: number = 0

  if (!CCW) {
    if (!Twentyfour) {
      hr = h * 30 + m * 0.5
      mr = m * 6 + (s ? s * 0.1 : 0)
      sr = s ? s * 6 : 0
    } else {
      hr = h * 15 + m * 0.25
      mr = m * 6 + (s ? s * 0.1 : 0)
      sr = s ? s * 6 : 0
    }
  }

  if (CCW) {
    if (!Twentyfour) {
      hr = 360 - (h * 30 + m * 0.5)
      mr = 360 - (m * 6 + (s ? s * 0.1 : 0))
      sr = 360 - (s ? s * 6 : 0)
    } else {
      hr = 360 - (h * 15 + m * 0.25)
      mr = 360 - (m * 6 + (s ? s * 0.1 : 0))
      sr = 360 - (s ? s * 6 : 0)
    }
  }

  HHand?.setAttribute('transform', `rotate(${hr})`)
  MHand?.setAttribute('transform', `rotate(${mr})`)
  // if (t.length === 3) {
  SHand?.setAttribute('transform', `rotate(${sr})`)
  // }
}

function delSVG(SVG: SVGSVGElement) {
  while (SVG.lastChild) {
    SVG.removeChild(SVG.lastChild)
  }
}

function setRangeMax(id: string, value: number) {
  const r = document.getElementById(id) as HTMLInputElement
  if (r) {
    r.setAttribute('max', value.toString())
  }
}

function setRangeMin(id: string, value: number) {
  const r = document.getElementById(id) as HTMLInputElement
  if (r) {
    r.setAttribute('min', value.toString())
  }
}

function saveSvg(svgEl: any, name: string) {
  svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  const svgData = svgEl.outerHTML
  const preface = '<?xml version="1.0" standalone="no"?>\r\n'
  const svgBlob = new Blob([preface, svgData], { type: 'image/svg+xml;charset=utf-8' })
  const svgUrl = URL.createObjectURL(svgBlob)
  const downloadLink = document.createElement('a')
  downloadLink.href = svgUrl
  downloadLink.download = name
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

export { drawClock, saveSvg, setRangeMin, setRangeMax, setHandsToTime }
