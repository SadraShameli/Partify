export interface INavigationLink {
    Title: string;
    Url: string;
    Icon?: JSX.Element;
}

export interface INavigation {
    Title: string;
    Items: INavigationLink[];
}
