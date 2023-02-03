import type { INavigationMenu } from '../components/admin-dashboard/menu/NavigationMenu';

export const Menus: INavigationMenu[] = [
    {
        MenuId: 1,
        Link: "/",
        ParentId: 0,
        Text: "Home",
        MinifiedText: "HO",
        IconClass: "",
        Children: [],
        IsNode: true,
        Rights: ["CanReadDashboard"],
        HasImage: true
    },
    {
        MenuId: 2,
        Link: "/DnetQwikGrid",
        ParentId: 0,
        Text: "DnetQwikGrid",
        MinifiedText: "QG",
        IconClass: "",
        HasImage: false,
        Children: [
            {
                MenuId: 3,
                Link: "/BlGrid",
                ParentId: 0,
                Text: "Complex example",
                MinifiedText: "CE",
                IconClass: "",
                Children: [],
                IsNode: false,
                Rights: [
                    "CanReadDashboard"
                ],
            },
            {
                MenuId: 4,
                Link: "/FilteringExample",
                ParentId: 0,
                Text: "Filtering Example",
                MinifiedText: "FE",
                IconClass: "",
                Children: [],
                IsNode: false,
                Rights: [
                    "CanReadDashboard"
                ],
            },
            {
                MenuId: 5,
                Link: "/RowSelectionExample",
                ParentId: 0,
                Text: "Row Selection",
                MinifiedText: "RS",
                IconClass: "",
                Children: [],
                IsNode: false,
                Rights: [
                    "CanReadDashboard"
                ],
            },
            {
                MenuId: 6,
                Link: "/MultipleRowSelectionExample",
                ParentId: 0,
                Text: "Multiple Row Selection",
                MinifiedText: "MRS",
                IconClass: "",
                Children: [],
                IsNode: false,
                Rights: [
                    "CanReadDashboard"
                ],
            },
            {
                MenuId: 7,
                Link: "/AdvancedFilteringExample",
                ParentId: 0,
                Text: "Advanced Filtering",
                MinifiedText: "AF",
                IconClass: "",
                Children: [],
                IsNode: false,
                Rights: [
                    "CanReadDashboard"
                ],
            },
            {
                MenuId: 8,
                Link: "/GroupingExample",
                ParentId: 0,
                Text: "Grouping",
                MinifiedText: "GNG",
                IconClass: "",
                Children: [],
                IsNode: false,
                Rights: [
                    "CanReadDashboard"
                ],
            },
            {
                MenuId: 9,
                Link: "/CellTemplatesExample",
                ParentId: 0,
                Text: "Cell Templates",
                MinifiedText: "CT",
                IconClass: "",
                Children: [],
                IsNode: false,
                Rights: [
                    "CanReadDashboard"
                ],
            },
            {
                MenuId: 10,
                Link: "/SortingExample",
                ParentId: 0,
                Text: "Sorting",
                MinifiedText: "SNG",
                IconClass: "",
                Children: [],
                IsNode: false,
                Rights: [
                    "CanReadDashboard"
                ]
            }],
        IsNode: true,
        Rights: ["CanReadDashboard"]
    },
    {
        MenuId: 11,
        Link: "/Dialog",
        ParentId: 0,
        Text: "Dialog",
        MinifiedText: "DG",
        IconClass: "",
        Children: [],
        IsNode: true,
        Rights: ["CanReadDashboard"]
    },
    {
        MenuId: 12,
        Link: "/InputText",
        ParentId: 0,
        Text: "Form Fields",
        MinifiedText: "FF",
        IconClass: "",
        Children: [],
        IsNode: true,
        Rights: ["CanReadDashboard"]
    },
    {
        MenuId: 13,
        Link: "/Autocomplete",
        ParentId: 0,
        Text: "Autocomplete",
        MinifiedText: "AC",
        IconClass: "",
        Children: [],
        IsNode: true,
        Rights: ["CanReadDashboard"]
    },
    {
        MenuId: 14,
        Link: "/Select",
        ParentId: 0,
        Text: "Select",
        MinifiedText: "SCT",
        IconClass: "",
        Children: [],
        IsNode: true,
        Rights: ["CanReadDashboard"]
    },
    {
        MenuId: 15,
        Link: "/ConnectedPanel",
        ParentId: 0,
        Text: "ConnectedPanel",
        MinifiedText: "CP",
        IconClass: "",
        Children: [],
        IsNode: true,
        Rights: ["CanReadDashboard"]
    },
    {
        MenuId: 16,
        Link: "/FloatingPanel",
        ParentId: 0,
        Text: "FloatingPanel",
        MinifiedText: "FP",
        IconClass: "",
        Children: [],
        IsNode: true,
        Rights: ["CanReadDashboard"]
    },
    {
        MenuId: 17,
        Link: "/DatePicker",
        ParentId: 0,
        Text: "DatePicker",
        MinifiedText: "DP",
        IconClass: "",
        Children: [],
        IsNode: true,
        Rights: ["CanReadDashboard"]
    },
    {
        MenuId: 18,
        Link: "/Tabs",
        ParentId: 0,
        Text: "Tabs",
        MinifiedText: "TS",
        IconClass: "",
        Children: [],
        IsNode: true,
        Rights: ["CanReadDashboard"]
    },
]