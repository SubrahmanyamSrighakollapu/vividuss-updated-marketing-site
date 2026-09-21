import { site } from '@/data/site';
import { Icon } from '@/components/ui/Icon';
const networks = [
  ['linkedin', 'Linkedin'],
  ['twitter', 'Twitter'],
  ['facebook', 'Facebook'],
  ['instagram', 'Instagram'],
] as const;
export function SocialLinks() {
  return (
    <div className="social-links">
      {networks.map(([key, icon]) =>
        site.social[key] ? (
          <a
            key={key}
            href={site.social[key]}
            aria-label={'Vividuss on ' + key}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name={icon} size={17} />
          </a>
        ) : (
          <span key={key} aria-hidden="true">
            <Icon name={icon} size={17} />
          </span>
        ),
      )}
    </div>
  );
}
