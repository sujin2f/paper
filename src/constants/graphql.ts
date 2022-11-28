import { gql } from '@apollo/client'

export enum Fields {
    BACKGROUNDS = 'backgrounds',
    POST = 'post',
    MENU = 'menu',
    ARCHIVE = 'archive',
    FLICKR = 'flickr',
    TAG_CLOUD = 'tagCloud',
    RECENT = 'recent',
}

export enum Types {}

export const imageQueryNodes = `
    url
    mimeType
    sizes {
        key
        file
    }
`
export const baseQueryNodes = `
    id
    slug
    title
    excerpt
`

export const GraphQuery = {
    BACKGROUNDS: gql`
        query {
            ${Fields.BACKGROUNDS} { ${imageQueryNodes} }
        }
    `,
    POST: gql`
        query ${Fields.POST} ($slug: String!) {
            ${Fields.POST} (slug: $slug) {
                ${baseQueryNodes}
                content
                date
                link
                parent
                type
                menuOrder
                tags {
                    ${baseQueryNodes}
                    page
                    type
                }
                categories {
                    ${baseQueryNodes}
                    page
                    type
                }
                series {
                    ${baseQueryNodes}
                    page
                    type
                }
                meta {
                    useBackgroundColor
                    backgroundColor
                }
                images {
                    id
                    list {
                        ${imageQueryNodes}
                    }
                    icon {
                        ${imageQueryNodes}
                    }
                    title {
                        ${imageQueryNodes}
                    }
                    background {
                        ${imageQueryNodes}
                    }
                    thumbnail {
                        ${imageQueryNodes}
                    }
                }
                prevNext {
                    prev {
                        ${baseQueryNodes}
                        link
                    }
                    next {
                        ${baseQueryNodes}
                        link
                    }
                }
                related {
                    ${baseQueryNodes}
                    date
                    link
                    images {
                        id
                        list {
                            ${imageQueryNodes}
                        }
                        icon {
                            ${imageQueryNodes}
                        }
                        title {
                            ${imageQueryNodes}
                        }
                        background {
                            ${imageQueryNodes}
                        }
                        thumbnail {
                            ${imageQueryNodes}
                        }
                    }
                }
            }
        }
    `,
    MENU: gql`
        query ${Fields.MENU} ($slug: String!) {
            ${Fields.MENU} (slug: $slug) {
                id
                title
                target
                link
                htmlClass
                children {
                    id
                    title
                    target
                    link
                    htmlClass
                }
            }
        }
    `,
    ARCHIVE: gql`
        query ${Fields.ARCHIVE} ($type: String!, $slug: String!, $page: Int!) {
            ${Fields.ARCHIVE} (type: $type, slug: $slug, page: $page) {
                ${baseQueryNodes}
                total
                limit
                pages
                page
                type
                image {
                    ${imageQueryNodes}
                }
                posts {
                    ${baseQueryNodes}
                    date
                    link
                    tags {
                        ${baseQueryNodes}
                        page
                        type
                    }
                    images {
                        id
                        list {
                            ${imageQueryNodes}
                        }
                        background {
                            ${imageQueryNodes}
                        }
                        thumbnail {
                            ${imageQueryNodes}
                        }
                    }
                }
            }
        }
    `,
    FLICKR: gql`
        query {
            ${Fields.FLICKR} {
                title
                link
                media
            }
        }
    `,
    TAG_CLOUD: gql`
        query {
            ${Fields.TAG_CLOUD} {
                id
                title
                slug
                count
                hit
            }
        }
    `,
    RECENT: gql`
        query {
            ${Fields.RECENT} {
                ${baseQueryNodes}
                date
                link
                images {
                    id
                    list {
                        ${imageQueryNodes}
                    }
                    icon {
                        ${imageQueryNodes}
                    }
                    title {
                        ${imageQueryNodes}
                    }
                    background {
                        ${imageQueryNodes}
                    }
                    thumbnail {
                        ${imageQueryNodes}
                    }
                }
            }
        }
    `,
}

export const graphqlSchema = `
    scalar Date
    type Query {
        hello: String
    },
`
