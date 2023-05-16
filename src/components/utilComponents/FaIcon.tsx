import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconDefinition;
  size?: string;
  onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void; // Updated onClick prop type
}

/**
 * Creates a standard-sized font awesome icon
 */
export function FaIcon({ icon, size = '1em', onClick }: Props) {
  return (
    <FontAwesomeIcon
      width={size}
      height={size}
      icon={icon}
      style={{
        width: size,
        height: size,
      }}
      onClick={onClick}
    />
  );
}
