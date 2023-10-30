export type TagType = {
    slug: string,
    text: string,
    count?: number
}

export type BasicType = {
    subtitle: string,
    type: string,
    url: string
}

export type NewType = {
    _id: string,
    display_date: Date,
    headlines: {
        basic: string
    },
    promo_items: {
        basic: BasicType
    },
    subtype: string,
    taxonomy: {
        tags: TagType[]
    },
    website_url: string
}
