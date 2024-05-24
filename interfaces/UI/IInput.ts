export interface IInput {
    id: string
    name: string
    type: string
    className: string
    checked?: boolean
    value?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
}