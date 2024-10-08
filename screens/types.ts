// types.ts
export type RootStackParamList = {
    Home: { newItem?: { dishName: string, description: string, course: string, price: number } };
    AddMenu: undefined;      // This screen does not accept any parameters
    FilterMenu: undefined;    // This screen also does not accept any parameters
};
