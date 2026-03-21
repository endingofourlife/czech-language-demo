type ControllerResult= {
    isSuccess: boolean;
}

export type SuccessControllerResult<T = void> =
    T extends void
        ? ControllerResult
        : ControllerResult & { data: T }


export type ErrorControllerResult = ControllerResult & {
    message?: string;
}