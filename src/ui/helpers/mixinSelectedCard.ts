import isNotNullish from 'helpers/isNotNullish';

export function mixinSelectedCard(cardId: string | undefined): string | null {
  if (isNotNullish(cardId)) return cardId;
  return null;
}
