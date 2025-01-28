import { LucideIcon } from "lucide-react";

// Base interface for common properties
export interface BaseComponent {
  label: string;
  icon: LucideIcon;
}

// Layout interface
export interface ILayout extends BaseComponent {
  type: "column";
  numOfCol: number;
}

// Element base interface
export interface BaseElement extends BaseComponent {
  type: ElementType;
  style: BaseStyle;
  outerStyle?: OuterStyle;
}

// Style interfaces
export interface BaseStyle {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  width?: string | number;
  height?: string | number;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  objectFit?: string;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}

export interface OuterStyle {
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  width?: string;
  gap?: number;
}

// Element type specific interfaces
export type ElementType =
  | "Button"
  | "Text"
  | "Image"
  | "Logo"
  | "LogoHeader"
  | "Divider"
  | "SocialIcons";

export interface ButtonElement extends BaseElement {
  type: "Button";
  content: string;
  url: string;
}

export interface TextElement extends BaseElement {
  type: "Text";
  textarea: string;
}

export interface ImageElement extends BaseElement {
  type: "Image" | "Logo" | "LogoHeader";
  imageUrl: string;
  alt: string;
  url: string;
}

export interface DividerElement extends BaseElement {
  type: "Divider";
  content: string;
}

export interface SocialIcon {
  icon: string;
  url: string;
}

export interface SocialIconsElement extends BaseElement {
  type: "SocialIcons";
  socialIcons: SocialIcon[];
  options: SocialIcon[];
  style: {
    width: number;
    height: number;
  };
}

// Union type for all elements
export type IElement =
  | ButtonElement
  | TextElement
  | ImageElement
  | DividerElement
  | SocialIconsElement;

// Generic component card props
export interface ComponentCardProps<T extends BaseComponent> {
  header: string;
  componentList: T[];
}

export type IScreenSize = "Mobile" | "Desktop";

export interface IScreenSizeContext {
  screenSize: IScreenSize;
  setScreenSize: (size: IScreenSize) => void;
}

