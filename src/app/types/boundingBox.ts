import { CSSProperties, ReactNode, PointerEvent } from "react"

export type XOrds = "e" | "w"
export type YOrds = "n" | "s"
export type XYOrds = "nw" | "ne" | "se" | "sw"
export type Ords = XOrds | YOrds | XYOrds

export type CustomStyles = Omit<
  CSSProperties,
  "position" | "touchAction" | "top" | "left" | "width" | "height" | "boxSizing"
>

export type CustomAreaRenderer = (areaProps: IAreaRendererProps) => ReactNode

export interface IRectangle {
  x: number
  y: number
  width: number
  height: number
}

export interface IArea extends IRectangle {
  unit: "px" | "%"
  isNew?: boolean
  isChanging?: boolean
  areaStyle?: CustomStyles
}

export interface IAreaRendererProps extends Omit<IArea, "customAreaRenderer"> {
  areaNumber: number
}

export interface IPixelArea extends IArea {
  unit: "px"
}

export interface IPercentArea extends IArea {
  unit: "%"
}

export interface IDefaultAreaSelectorProps {
  maxAreas: number
  unit: IPropUnit
  minWidth: number
  minHeight: number
  debug: boolean
}

export interface IAreaSelectorProps extends Partial<IDefaultAreaSelectorProps> {
  children?: ReactNode
  areas: IArea[]
  onChange: (areas: IArea[]) => void
  maxWidth?: number
  maxHeight?: number
  wrapperStyle?: Omit<CSSProperties, "touchAction" | "boxSizing">
  globalAreaStyle?: CustomStyles
  customAreaRenderer?: CustomAreaRenderer
  mediaWrapperClassName?: string
}

export interface IEventData {
  startClientX: number
  startClientY: number
  startAreaX: number
  startAreaY: number
  clientX: number
  clientY: number
  isResize: boolean
  ord?: Ords
}

export interface IAreaStatus {
  areaChangeIndex: number
  isChanging: boolean
}

export type IPropUnit = "pixel" | "percentage"

export interface IAreaProps {
  area: IArea
  globalAreaStyle?: CustomStyles
  onCropStart: (event: PointerEvent<HTMLDivElement>) => void
  showHandles: boolean
  customAreaRenderer?: CustomAreaRenderer
  areaNumber: number
}
