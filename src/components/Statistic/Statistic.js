import { StatContainer, StatTittle, Rating, RatingMath } from './Statistic.styled';

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return ( 
        <StatContainer>
            <StatTittle>Statistics</StatTittle>
            <Rating>Good: {good}</Rating>
            <Rating>Neutral: {neutral}</Rating>
            <Rating>Bad: {bad}</Rating>
            <RatingMath>Total: {total}</RatingMath>
            <RatingMath>Positive percentage: {positivePercentage}%</RatingMath>
        </StatContainer>
    )
}




