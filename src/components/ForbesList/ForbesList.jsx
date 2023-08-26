import { ForbesListItem } from 'components';
import PropTypes from 'prop-types';

import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list &&
          list.map(({ id, name, capital, avatar, isIncrease }) => (
            <ForbesListItem
              key={id}
              name={name}
              capital={capital}
              avatar={avatar}
              isIncrease={isIncrease}
            />
          ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};

ForbesList.propTypes ={
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isIncrease: PropTypes.bool.isRequired,
    })
  )
}