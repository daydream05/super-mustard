export default {
    "type": "object",
    "name": "testimonialsblock",
    "title": "Testimonials Section",
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
            "initialValue": "TestimonialsBlock",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "TestimonialsBlock"
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
            "type": "array",
            "name": "testimonialslist",
            "title": "Testimonials",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "author",
                            "title": "Author",
                            "description": "The author of the testimonial.",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "avatar",
                            "title": "Avatar",
                            "description": "The avatar of the testimonial author.",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "content",
                            "title": "Content",
                            "description": "The text content of the testimonial.",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "author"
                        }
                    }
                }
            ]
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
                    "testimonialsblock"
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