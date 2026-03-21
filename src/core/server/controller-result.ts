import {ErrorControllerResult, SuccessControllerResult} from "@/shared/types/controller-result";

export function handleControllerError(message: string = "An error occurred"): ErrorControllerResult {
    return {
        isSuccess: false,
        message
    }
}

export function handleControllerSuccess<T = void>(data?: T): SuccessControllerResult<T> {
    if (data === undefined) {
        return {isSuccess: true} as SuccessControllerResult<T>;
    }
    return {
        isSuccess: true,
        data
    } as SuccessControllerResult<T>;
}