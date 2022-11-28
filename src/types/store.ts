type Type = {
    type: string
}

/**
 * Page Info
 */
export type WrapperClasses = {
    'wrapper--scrolled': boolean
    'wrapper--mobile-menu': boolean
    'wrapper--headline': boolean
}
export type State = {
    backgroundColor: string
    excerpt: string
    prefix: string
    title: string
    isLoading: boolean
    currentPage: string
    wrapperClasses: Partial<WrapperClasses>
}

export type Action = {
    pageInfo: Partial<State>
} & Type
