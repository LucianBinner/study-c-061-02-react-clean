import { LoadSurveyList } from '@/domain/usecases'
import { Icon, IconName } from '@/presentation/components'
import React from 'react'
import Styles from './item-styles.scss'

type Props = {
  survey: LoadSurveyList.Model
}

const Item: React.FC<Props> = ({ survey }: Props) => {
  const iconName = survey.didAnswer ? IconName.tumbUp : IconName.tumbDown
  return (
    <li className={Styles.surveyItemWrap}>
      <div className={Styles.surveyContent}>
        <Icon iconName={iconName} className={Styles.iconWrap} />
        <time>
          <span data-testid="day" className={Styles.day}>
            {survey.date.getDate().toString().padStart(2, '0')}
          </span>
          <span data-testid="month" className={Styles.month}>
            {survey.date.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}
          </span>
          <span data-testid="year" className={Styles.yar}>
            {survey.date.getFullYear()}
          </span>
        </time>
        <p data-testid="question">{survey.question}</p>
      </div>
      <footer>Ver Resultado</footer>
    </li>
  )
}

export default Item
