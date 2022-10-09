export interface IModal {
    title?: string;
    children?: JSX.Element | JSX.Element[];
    close: () => void;
}