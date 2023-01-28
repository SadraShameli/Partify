export interface INavigationLink {
    Name: string;
    Icon: string;
    Url: string;
}

export interface INavigation {
    Name: string;
    Items: INavigationLink[];
}
