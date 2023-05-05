import { ThemeOptions } from '@mui/material';

const GRID_GAP = 2;
const GRID_GAP_LARGE = 3.35;
const GRID_ITEM_DIMENSION = 16.5;

export function getShape() {
  const shape: ThemeOptions['shape'] = {
    gridGap: GRID_GAP,
    gridGapLarge: GRID_GAP_LARGE,
    gridItemDimension: GRID_ITEM_DIMENSION,
    gridItemSize: undefined, // set below
  };

  /**
   * Creates a card size in rem from a span
   */
  shape.gridItemSize = (span = 1) =>
    `${shape.gridItemDimension * span + (span - 1) * shape.gridGapLarge}rem`;

  return shape;
}

export function getShapeXS() {
  const shape: ThemeOptions['shape'] = {
    gridGap: GRID_GAP / 2,
    gridGapLarge: GRID_GAP_LARGE / 2,
    gridItemDimension: GRID_ITEM_DIMENSION / 2,
    gridItemSize: undefined, // set below
  };

  /**
   * Creates a card size in rem from a span
   */
  shape.gridItemSize = (span = 1) =>
    `${shape.gridItemDimension * span + (span - 1) * shape.gridGapLarge}rem`;

  return shape;
}
