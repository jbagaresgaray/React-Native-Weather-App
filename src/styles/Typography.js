import {scaleFont} from './Mixins';
// FONT FAMILY
export const FONT_FAMILY = 'Roboto';

// FONT WEIGHT
export const FONT_WEIGHT_THIN = '100';
export const FONT_WEIGHT_LIGHT = '300';
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_MEDIUM = '500';
export const FONT_WEIGHT_SEMI_BOLD = '600';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_48 = scaleFont(48);
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_41 = scaleFont(41);
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_THIN = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_THIN,
};

export const FONT_LIGHT = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_LIGHT,
};

export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_MEDIUM = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_MEDIUM,
};

export const FONT_SEMI_BOLD = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_SEMI_BOLD,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_BOLD,
};
