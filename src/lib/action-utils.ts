import {ActionResult} from "@/types/actionResult";

export function errorActionResult(message: string = "An error occurred"): ActionResult {
    console.error(message);
    return {
        success: false,
        message
    }
}

export function successActionResult(message: string = "Action completed successfully"): ActionResult {
    console.log(message);
    return {
        success: true,
        message
    }
}