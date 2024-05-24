import React from "react"

type ButtonType = "submit" | "reset" | "button"

export interface IButton {
    children: React.ReactNode
    className: string
    onClick?: () => void
    disabled?: boolean
    type?: ButtonType
}