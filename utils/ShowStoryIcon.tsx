import { rem } from '@mantine/core';
import {
  IconAirBalloon,
  IconArticle,
  IconChartAreaFilled,
  IconHeartFilled,
} from '@tabler/icons-react';
import React from 'react';

interface ShowStoryIconProps {
  genre: string;
}

const iconsStyles = { width: rem(12), height: rem(12) };

const ShowStoryIcon: React.FC<ShowStoryIconProps> = ({ genre = '' }) => {
  const genreIcon: Record<string, JSX.Element> = {
    Fantasy: <IconChartAreaFilled style={iconsStyles} />,
    'Candlelit Confessions': <IconArticle style={iconsStyles} />,
    Romance: <IconHeartFilled style={iconsStyles} />,
    Adventure: <IconAirBalloon style={iconsStyles} />,
  };

  if (genreIcon[genre] !== undefined) {
    return genreIcon[genre];
  }

  return <IconArticle style={iconsStyles} />;
};

export default ShowStoryIcon;
