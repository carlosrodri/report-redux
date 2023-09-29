const ChakraTheme = {
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
    colors: {
        brand: {
            400: "red",
            900: "#1a202c",
        },
        primary_btn_button: {
            100: "#FF5500"
        },
        show_button: "#44C662",
        edit_button: "#FED049",
        delete_button: "#F44658",
        form_title_color: {
            100: "#009BDD",
            200: "#151515"
        },
        bg_color: {
            100: "#009BDD",
            200: "#1D71B8"
        },
        bbva: {
            main_txt: {
                700: "green"
            }
        },
        default: {
            title: {
                100: "#FFFFFF",
                200: "#FF5500"
            },
            card: {
                100: "rgba(255, 255, 255, 1)"
            },
            table_header: {
                100: "#000000"
            },
            main_txt: {
                700: "red"
            }
        }
    },
    styles: {
        global: (props) => ({
            body: {
                bg: 'transparent',
            }
        })
    },
}

export default ChakraTheme;