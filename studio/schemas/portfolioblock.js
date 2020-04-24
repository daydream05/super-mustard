export default {
    "type": "object",
    "name": "portfolioblock",
    "title": "Latest Projects",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Element ID",
            "validation": null
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "initialValue": "PortfolioBlock",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "PortfolioBlock"
                ]
            }
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout_style",
            "title": "Layout Style",
            "description": "The layout style of the projects section.",
            "initialValue": "mosaic",
            "validation": null,
            "options": {
                "list": [
                    "mosaic",
                    "tiles"
                ]
            }
        },
        {
            "type": "number",
            "name": "num_projects_displayed",
            "title": "Number of projects to display",
            "validation": Rule => Rule.required().integer()
        },
        {
            "type": "string",
            "name": "view_all_text",
            "title": "All projects button text",
            "description": "The text displayed inside the button.",
            "validation": null
        },
        {
            "type": "string",
            "name": "view_all_url",
            "title": "All projects button URL",
            "validation": null
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "portfolioblock"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}