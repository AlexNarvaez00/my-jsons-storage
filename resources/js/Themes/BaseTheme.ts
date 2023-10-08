import { CustomFlowbiteTheme } from "flowbite-react";

export const BaseTheme = {
    checkbox: {
        root: {
            base: "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
            color: {
                default:
                    "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
                dark: "focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800",
                failure:
                    "focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900",
                gray: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
                info: "focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800 text-cyan-800",
                light: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
                purple: "focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600",
                success:
                    "focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800",
                warning:
                    "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
                blue: "focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700",
                cyan: "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
                green: "focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600",
                indigo: "focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700",
                lime: "focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700",
                pink: "focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600",
                red: "focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600",
                teal: "focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600",
                yellow: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
            },
        },
    },
    fileInput: {
        root: {
            base: "flex",
        },
        field: {
            base: "relative w-full",
            input: {
                base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: {
                    sm: "sm:text-xs",
                    md: "text-sm",
                    lg: "sm:text-md",
                },
                colors: {
                    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    failure:
                        "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                    warning:
                        "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                    success:
                        "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
            },
        },
    },
    label: {
        root: {
            base: "text-sm font-medium",
            disabled: "opacity-50",
            colors: {
                default: "text-gray-900 dark:text-white",
                info: "text-cyan-500 dark:text-cyan-600",
                failure: "text-red-700 dark:text-red-500",
                warning: "text-yellow-500 dark:text-yellow-600",
                success: "text-green-700 dark:text-green-500",
            },
        },
    },
    radio: {
        root: {
            base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
        },
    },
    rangeSlider: {
        root: {
            base: "flex",
        },
        field: {
            base: "relative w-full",
            input: {
                base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
                sizes: {
                    sm: "h-1 range-sm",
                    md: "h-2",
                    lg: "h-3 range-lg",
                },
            },
        },
    },
    textInput: {
        base: "flex",
        addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
        field: {
            base: "relative w-full",
            icon: {
                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
            },
            rightIcon: {
                base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
            },
            input: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: {
                    sm: "p-2 sm:text-xs",
                    md: "p-2.5 text-sm",
                    lg: "sm:text-md p-4",
                },
                colors: {
                    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    failure:
                        "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                    warning:
                        "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                    success:
                        "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
                withRightIcon: {
                    on: "pr-10",
                    off: "",
                },
                withIcon: {
                    on: "pl-10",
                    off: "",
                },
                withAddon: {
                    on: "rounded-r-lg",
                    off: "rounded-lg",
                },
                withShadow: {
                    on: "shadow-sm dark:shadow-sm-light",
                    off: "",
                },
            },
        },
    },
    textarea: {
        base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
        colors: {
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            failure:
                "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            warning:
                "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
            success:
                "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        },
        withShadow: {
            on: "shadow-sm dark:shadow-sm-light",
            off: "",
        },
    },
    toggleSwitch: {
        root: {
            base: "group relative flex items-center rounded-lg focus:outline-none",
            active: {
                on: "cursor-pointer",
                off: "cursor-not-allowed opacity-50",
            },
            label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
        },
        toggle: {
            base: "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
            checked: {
                on: "after:translate-x-full after:border-white",
                off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
                color: {
                    blue: " bg-cyan-700 border-cyan-700",
                    dark: "bg-dark-700 border-dark-900",
                    failure: "bg-red-700 border-red-900",
                    gray: "bg-gray-500 border-gray-600",
                    green: "bg-green-600 border-green-700",
                    light: "bg-light-700 border-light-900",
                    red: "bg-red-700 border-red-900",
                    purple: "bg-purple-700 border-purple-900",
                    success: "bg-green-500 border-green-500",
                    yellow: "bg-yellow-400 border-yellow-400",
                    warning: "bg-yellow-600 border-yellow-600",
                    cyan: "bg-cyan-500 border-cyan-500",
                    lime: "bg-lime-400 border-lime-400",
                    indigo: "bg-indigo-400 border-indigo-400",
                    teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
                    info: "bg-cyan-600 border-cyan-600",
                    pink: "bg-pink-600 border-pink-600",
                },
            },
            sizes: {
                sm: "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
                md: "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
                lg: "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6",
            },
        },
    },
};
