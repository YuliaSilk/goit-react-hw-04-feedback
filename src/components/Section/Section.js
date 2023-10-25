import { Feedback, Tittle } from './Section.styled'

export const Section = ({ tittle, children}) => {
    return (
        <Feedback>
            <Tittle>{tittle}</Tittle>
            {children}
        </Feedback>
    )
}
