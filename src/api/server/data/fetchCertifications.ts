import { Badges } from 'api/types/mockData/Badges';
import { BadgeType } from 'api/types/Badge';

export function fetchCertifications(): BadgeType[] {
  return Badges;
}
