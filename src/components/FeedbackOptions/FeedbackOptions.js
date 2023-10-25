import { OptionContainer, Button } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
        <OptionContainer>
            {options.map(item =>
                <Button key={item} type="button" onClick={() =>onLeaveFeedback(item)}>{item}</Button>)}
        </OptionContainer>
    )
}