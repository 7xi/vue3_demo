
export interface AppConfig {
    appSafeAreaHeader: number
    appSafeAreaFooter: number
}

export interface About {
    name: string
    local: string
    likes: string[]
}

export interface State {
    appConfig: AppConfig
    about: About
}
