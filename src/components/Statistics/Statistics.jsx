import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatsList,
  StatsItem,
  StatsTitle,
  getRandomHexColor,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <StatisticsWrapper>
        {title && <StatsTitle>{title}</StatsTitle>}

        <StatsList>
          {stats.map(stat => (
            <StatsItem
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </StatsItem>
          ))}
        </StatsList>
      </StatisticsWrapper>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
