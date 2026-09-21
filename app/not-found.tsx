import { Button } from '@/components/ui/Button';
export default function NotFound() {
  return (
    <div className="container not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>A Fresh Direction.</h1>
      <p>We couldn’t find that page. Let’s get you back to something great.</p>
      <Button href="/">Back to Home</Button>
    </div>
  );
}
