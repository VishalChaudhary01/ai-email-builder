import { ILayout } from ".";

export interface IDragDropLayoutContext {
     selectedLayout: ILayout | undefined;
     setSelectedLayout: React.Dispatch<React.SetStateAction<ILayout | undefined>>;
}