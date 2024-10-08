export type MenuItem = {
    dishName: string;
    description: string;
    course: string;
    price: number;
};

export type RootStackParamList = {
    Home: { newItem?: MenuItem; menuItems?: MenuItem[] }; // Add menuItems here
    AddMenu: undefined;
    FilterMenu: undefined;
};
