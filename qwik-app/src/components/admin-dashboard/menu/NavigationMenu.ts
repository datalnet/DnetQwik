export interface INavigationMenu {
    MenuId?: number;
    ParentId?: number;
    IsNode?: boolean;
    Text?: string;
    MinifiedText?: string;
    Link?: string;
    LinkClass?: string;
    HasImage?: boolean;
    Redirect?: string;
    Title?: string;
    IconClass?: string;
    Children: INavigationMenu[];
    Rights?: string[];
}