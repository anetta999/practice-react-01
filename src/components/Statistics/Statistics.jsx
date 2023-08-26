import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes from 'prop-types';

const icons = [<FaRegThumbsUp />, <MdPeople/>, <MdOutlineProductionQuantityLimits/>, <GiTreeDoor/>]
export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

<StatisticsList>
        {stats && stats.map(({ id, title, total }, index) =>
          <StatisticItem key={id} title={title} total={total} icon={icons[index]} />)}
</StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  })
  )
}
